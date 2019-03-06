import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = (props) => {
  return (
    <>
      <Link to={`/photos/${props.photoId}`}>
        <div>
          <p>{props.photoTitle}</p>
          <p>{props.photoDescription}</p>
          <img src={props.photo} className="image"/>
        </div>
      </Link>
    </>
  )
}

export default PhotosIndexItem;
