import React from 'react';
import UserShowBannerContainer from './user_show_banner_container';
import UserShowOptions from './user_show_options';
import UserShowFilters from './user_show_filters';
import PhotosIndexContainer from '../../photos/photos_index_container';
import Footer from '../../footer';
import { connect } from 'react-redux';

const UserShowPhotos = props => {
  const { userId } = props;

  return (
    <div className="index-flex-center-col">
      <UserShowBannerContainer userId={userId} />
      <UserShowOptions userId={userId} />
      <UserShowFilters />
      <PhotosIndexContainer userId={userId} />
      <Footer />
    </div>
  )
}

const mstp = ({ session: { id } }, ownProps) => {
  let userId = Number(ownProps.match.params.id);
  return ({
    sessionId: id,
    userId: userId
  });
};

const mdtp = (dispatch) => {
  return ({
  });
};

export default connect(mstp, mdtp)(UserShowPhotos);
