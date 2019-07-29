import React from 'react';

const PhotoIndexItemOverlay = props => {
  const { username, title, comments } = props;
  return (
    <div className="overlay-50">
      <div className="flex-col-end-1">
        <div className="details-title">{title}</div>
        <div className="testtt">
          <div className="details-username flexer">by {username}</div>
          <div className="details-comments flex-row-end">
            <h1 className="details-comment-count">{comments}</h1>
            <i className="far fa-comment"></i>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default PhotoIndexItemOverlay;