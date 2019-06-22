import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import AlbumsIndexContainer from './albums_index_container';
import AlbumOptionsBar from './album_options_bar';
import CreateAlbumModalContainer from './create_album_modal_container';
import UserShowBannerContainer from '../pages/user_show/user_show_banner_container';
import UserShowOptions from '../pages/user_show/user_show_options';

const UserShowAlbums = props => {
  const [ showModal, setShowModal ] = useState(false);
  const { userId, sessionId, fetchUser } = props;

  useEffect(() => {
    fetchUser(userId);
  }, [ userId ]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  let loggedIn = sessionId === userId;
  let albumOptions = loggedIn ? "display-block" : "display-none";
  
  return (
    <>
      {/* <CreateAlbumModalContainer
        show={showModal}
        closeModal={handleCloseModal}
        userId={userId}
      /> */}
      <UserShowBannerContainer userId={userId} />
      <UserShowOptions userId={userId} />
      <AlbumOptionsBar 
        albumOptions={albumOptions}
        handleShowModal={handleShowModal}
      />
      <AlbumsIndexContainer userId={userId}/>
    </>
  )
}

const mstp = ({ session }, ownProps) => {
  let userId = Number(ownProps.match.params.id);

  return({
    userId: userId,
    sessionId: session.id
  });
};

const mdtp = dispatch => {
  return({
    fetchUser: id => dispatch(fetchUser(id))
  });
};

export default connect(mstp, mdtp)(UserShowAlbums);