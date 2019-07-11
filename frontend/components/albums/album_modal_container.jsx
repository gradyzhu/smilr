import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createAlbum } from '../../actions/albums_actions';
import { withRouter } from 'react-router';
import ModalPhotoIndex from './modal_photo_index';
import CreateAlbumForm from './create_album_form';

const AlbumModal = props => {
  const { userId, photos, createAlbum, closeModal, history } = props;
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ photoIds, setPhotoIds ] = useState([]);

  const handleClick = event => {
    const newPhotoId = Number(event.currentTarget.id);
    const newPhotoIds = photoIds;
    
    if (photoIds.includes(newPhotoId)) {
      let index = photoIds.indexOf(newPhotoId);
      newPhotoIds.splice(index, 1);
    } else {
      newPhotoIds.push(newPhotoId);
    }

    setPhotoIds(newPhotoIds);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    let album = {
      name: name,
      description: description,
      user_id: userId,
      photo_ids: photoIds
    };
    createAlbum(album).then(res => {
      history.push(`/albums/${res.album.id}`);
    });
  };

  const handleInput = field => {
    return event => {
      if (field === "description") {
        setDescription(event.currentTarget.value);
      } else if (field === "name") {
        setName(event.currentTarget.value);
      }
    };
  };

  return(
    <div className="modal flex-center">
      <i onClick={closeModal} className="fa fa-times"></i>
      <div className="modal-container-wrap flex-row-center">
        <CreateAlbumForm 
          handleInput={handleInput} 
          handleSubmit={handleSubmit}
          handleSubmit={handleSubmit}
          description={description}
          name={name} />
        <ModalPhotoIndex 
          handleClick={handleClick}
          photos={photos} />
      </div>
    </div>
  )
}

const mstp = (state, ownProps) => {
  return {
    closeModal: ownProps.closeModal,
    userId: ownProps.userId,
    photos: ownProps.photos,
    history: ownProps.history
  }
};

const mdtp = dispatch => {
  return ({
    createAlbum: album => dispatch(createAlbum(album))
  });
};

export default withRouter(connect(mstp, mdtp)(AlbumModal));