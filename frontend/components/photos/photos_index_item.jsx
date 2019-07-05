import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = props => {
  const {photoId, photoTitle, username, commentCount, photo} = props;
  
  return (
    <div className="photo-container">
      <Link to={`/photos/${photoId}`}>
        <div className="overlay">
          <div className="overlay-50">
            <div className="flex-col-end-1">
              <div className="details-title">{photoTitle}</div>
              <div className="testtt">
                <div className="details-username flexer">by {username}</div>
                <div className="details-comments flex-row-end">
                  <h1 className="details-comment-count">{commentCount}</h1>
                  <i className="far fa-comment"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={photo} className="image"/>
      </Link>
    </div>
  )
}

export default PhotosIndexItem;
