import React from 'react';
import { connect } from 'react-redux';
import { deletePhoto } from '../../../actions/photos_actions';
import { withRouter } from 'react-router';

const PhotoOptions = props => {
  const { deletePhoto, history, photoId } = props;

  const handleDelete = e => {
    deletePhoto(photoId);
    history.push("/photos");
  };

  return (
    <div className="photo-options-container flex-center">
      <div className="photo-options flex-end-row">
        <i className="far fa-trash-alt tool-button"
          onClick={handleDelete}>
        </i>
      </div>
    </div>
  )
}

const mstp = (state, ownProps) => {
  let history = ownProps.history;
  return {
    history: history
  };
};

const mdtp = dispatch => {
  return ({
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
  });
};

export default withRouter(connect(mstp, mdtp)(PhotoOptions));
