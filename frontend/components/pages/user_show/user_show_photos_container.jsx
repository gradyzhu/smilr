import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import UserShowBanner from './user_show_banner';
import UserShowOptions from './user_show_options';
import UserShowFilters from './user_show_filters';
import PhotosIndexContainer from '../../photos/photos_index_container';
import Footer from '../../footer';
import { fetchUser, clearUsers } from '../../../actions/session_actions';

const UserShowPhotos = props => {
  const { userId, fetchUser, sessionUser, clearUsers, user } = props;
  
  useEffect(() => {
    fetchUser(userId);
    return (() => clearUsers(sessionUser));
  }, [ userId ]);

  if (user) {
    return (
      <div className="index-flex-center-col">
        <UserShowBanner user={user} />
        <UserShowOptions 
          userId={userId} 
          filter={"photostream"} />
        <UserShowFilters />
        <PhotosIndexContainer userId={userId} />
        {/* <Footer /> */}
      </div> )
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

  return ({
    userId: userId,
    user: user,
    sessionUser: sessionUser
  });
};

const mdtp = dispatch => { 
  return ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    clearUsers: (sessionUser) => dispatch(clearUsers(sessionUser))
  });
};

export default connect(mstp, mdtp)(UserShowPhotos);
