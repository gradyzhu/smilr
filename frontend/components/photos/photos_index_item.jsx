import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = (props) => {
  return (
    <>
      <div className="photo-container">
        <Link to={`/photos/${props.photoId}`}>
          <div className="overlay">
            <div className="overlay-50">
              <div className="flex-col-end-1">
                <div className="details-title">{props.photoTitle}</div>
                <div className="details-username">by {props.username}</div>
              </div>
            </div>
          </div>
          <img src={props.photo} className="image"/>
        </Link>
      </div>
    </>
  )
}

export default PhotosIndexItem;
