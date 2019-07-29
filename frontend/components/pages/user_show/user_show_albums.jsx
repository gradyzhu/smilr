import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import AlbumsIndexContainer from '../../albums/albums_index_container';
import AlbumOptionsBar from '../../albums/album_options_bar';
import AlbumModalContainer from '../../albums/album_modal_container';
import UserShowBanner from './user_show_banner';
import UserShowOptions from './user_show_options';
import { fetchUser, clearUsers } from '../../../actions/session_actions';
import { fetchPhotos, clearPhotos } from '../../../actions/photos_actions';

const UserShowAlbums = props => {
  const { userId, sessionId, fetchUser, sessionUser, 
          user, clearUsers, photos, fetchPhotos } = props;

  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    fetchUser(userId);
    return (() => {
      clearUsers(sessionUser);
      clearPhotos();
    });
  }, [ userId ]);

  const handleShowModal = (() => {
    fetchPhotos(0, userId, null);
    setShowModal(true);
  });
  
  const handleCloseModal = (() => {
    setShowModal(false);
  });
  
  let modal;
  let loggedIn = sessionId === userId;
  if (showModal) {
    modal = <AlbumModalContainer
              photos={photos}
              closeModal={handleCloseModal}
              userId={userId} />
  } else {
    modal = null;
  }

  if (user) {
    return (
      <>
        {modal}
        <UserShowBanner user={user} />
        <UserShowOptions 
          userId={userId}
          filter={"albums"} />
        <AlbumOptionsBar 
          handleShowModal={handleShowModal}
    loggedIn={loggedIn} />
        <AlbumsIndexContainer userId={userId} />
      </>
    )
  } else {
    return (
      <div className="user-show-loader">
        <SyncLoader color={'#919191'} />
      </div>
    )
  }
}

const mstp = ({ entities: { users, photos }, session: { id }}, ownProps) => {
  let userId = Number(ownProps.match.params.id);
  let sessionUser = users ? users[id] : null;
  let user = users[userId];
  let userPhotos = Object.values(photos).length ? Object.values(photos) : [];

  return({
    userId: userId,
    user: user,
    sessionId: id,
    sessionUser: sessionUser,
    photos: userPhotos
  });
};

const mdtp = dispatch => {
  return({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPhotos: (count, userId, tagId) => dispatch(fetchPhotos(count, userId, tagId)),
    clearUsers: sessionUser => dispatch(clearUsers(sessionUser))
  });
};

export default connect(mstp, mdtp)(UserShowAlbums);