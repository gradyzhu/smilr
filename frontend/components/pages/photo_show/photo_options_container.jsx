import React from 'react';
import { connect } from 'react-redux';
import { deletePhoto } from '../../../actions/photos_actions';

const PhotoOptions = props => {
  const { deletePhoto, history, userId } = props;

  const handleDelete = e => {
    deletePhoto(id);
    history.push("/photos");
  };

  return (
    <div className="show-right-col">
      <div className="show-tool-bar">
        <i className="far fa-edit tool-button"></i>
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

export default connect(mstp, mdtp)(PhotoOptions);
