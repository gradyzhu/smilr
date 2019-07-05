import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import AlbumsIndexContainer from '../../albums/albums_index_container';
import AlbumOptionsBar from '../../albums/album_options_bar';
import CreateAlbumModalContainer from '../../albums/create_album_modal_container';
import UserShowBanner from './user_show_banner';
import UserShowOptions from './user_show_options';
import { fetchUser, clearUsers } from '../../../actions/session_actions';

const UserShowAlbums = props => {
  const [ showModal, setShowModal ] = useState(false);
  const { userId, sessionId, fetchUser, sessionUser, user, clearUsers } = props;

  useEffect(() => {
    fetchUser(userId);
    return (() => clearUsers(sessionUser));
  }, [ userId ]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  let loggedIn = sessionId === userId;
  let albumOptions = loggedIn ? "display-block" : "display-none";

  if (user) {
    return (
      <>
        <CreateAlbumModalContainer
          show={showModal}
          closeModal={handleCloseModal}
          userId={userId}
        />
        <UserShowBanner user={user} />
        <UserShowOptions userId={userId} />
        <AlbumOptionsBar 
          albumOptions={albumOptions}
          handleShowModal={handleShowModal}
        />
        <AlbumsIndexContainer userId={userId}/>
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

const mstp = ({ entities: { users }, session: { id }}, ownProps) => {
  let userId = Number(ownProps.match.params.id);
  let sessionUser = users ? users[id] : null;
  let user = users[userId];
  return({
    userId: userId,
    user: user,
    sessionId: id,
    sessionUser: sessionUser
  });
};

const mdtp = dispatch => {
  return({
    fetchUser: id => dispatch(fetchUser(id)),
    clearUsers: sessionUser => dispatch(clearUsers(sessionUser))
  });
};

export default connect(mstp, mdtp)(UserShowAlbums);