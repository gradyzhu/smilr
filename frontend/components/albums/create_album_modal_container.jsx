import React from 'react';
import AlbumModalIndexItem from './album_modal_index_item';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photos_actions';
import { createAlbum } from '../../actions/albums_actions';
import { withRouter } from 'react-router';

class CreateAlbumModal extends React.Component {
  state = {
    name: "",
    user_id: this.props.sessionId,
    description: "",
    photo_ids: []
  };

  componentDidMount() {
    this.props.fetchPhotos();
  }

  handleClick = event => {
    const newPhotoId = parseInt(event.currentTarget.id, 10);
    const photoIds = this.state.photo_ids;

    if (photoIds.includes(newPhotoId)) {
      let index = photoIds.indexOf(newPhotoId);
      photoIds.splice(index, 1);
    } else {
      photoIds.push(newPhotoId);
    }

    this.setState({photo_ids: photoIds});
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.createAlbum(this.state).then(res => {
      this.props.history.push(`/albums/${res.album.id}`);
    });
  }

  handleInput = field => {
    return event => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  render() {
    const { show, closeModal, photos } = this.props;
    const { name, description } = this.state;
    const className = show ? "modal" : "display-none";
    const userPhotos = photos.map(photo => {
      return(
        <div 
          className="album-modal-index-item-container flex-row-center"
          key={photo.id}>
          <input 
            id={photo.id} 
            onClick={this.handleClick}
            type="checkbox" 
            className="checkbox-style"></input>
          <AlbumModalIndexItem photo={photo.imageUrl}/>
        </div>
      )
    });
    return(
      <div className={className}>
        <div className="full-width flex-row-center">
          <i onClick={closeModal} className="fa fa-times"></i>
          <div className="modal-container-wrap flex-row-center">
            <div className="step-1-container flex-col-center">
              <div className="step-text flex-row-start">
                <h1>Step 1 - Album details</h1>
              </div>
              <div className="create-album-form-container flex-col-center">
                <form
                  onSubmit={this.handleSubmit} 
                  className="flex-col-center">
                  <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={this.handleInput("name")}
                    className="create-album-form-input"/>
                  <textarea
                    type="text"
                    value={description}
                    placeholder="description"
                    onChange={this.handleInput("description")}
                    className="create-album-form-textarea"/>
                  <div className="">
                    <button className="blue-button create-album-form-button">
                      Create
                    </button>
                  </div>
                </form> 
              </div>
            </div>
            <div className="step-2-container flex-col-center">
              <div className="step-text flex-row-start">
                <h1 className="step-text-2">Step 2 - Select photos</h1>
              </div>
              <div className="modal-photo-index">
                <div className="flex-row-start-top-left">
                  <div className="modal-index-items flex-row-start-top-left">
                    {userPhotos}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mstp = ({entities: {photos}, session}) => {
  return {
    sessionId: session.id,
    photos: Object.values(photos).filter(photo => {
      return (photo.userId === session.id)
    })
  }
};

const mdtp = dispatch => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    createAlbum: album => dispatch(createAlbum(album))
  });
};

export default withRouter(connect(mstp, mdtp)(CreateAlbumModal));