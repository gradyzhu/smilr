import React from 'react';
import { connect } from 'react-redux';
import { deletePhoto } from '../../../actions/photos_actions';
import { withRouter } from 'react-router';

const PhotoOptions = props => {
  const { deletePhoto, history, photoId, sessionId, photoUserId } = props;

  const handleDelete = e => {
    deletePhoto(photoId);
    history.push("/photos");
  };

  let destroyButton;
  if (sessionId === photoUserId) {
    destroyButton = <i className="far fa-trash-alt tool-button" onClick={handleDelete}> </i>
  } else {
    destroyButton = null;
  }

  return (
    <div className="photo-options-container flex-center">
      <div className="photo-options flex-end-row">
        {destroyButton}
      </div>
    </div>
  )
}

const mstp = ({session: {id}}, ownProps) => {
  let history = ownProps.history;
  return {
    history: history,
    sessionId: Number(id),
    photoUserId: ownProps.photoUserId
  };
};

const mdtp = dispatch => {
  return ({
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
  });
};

export default withRouter(connect(mstp, mdtp)(PhotoOptions));
