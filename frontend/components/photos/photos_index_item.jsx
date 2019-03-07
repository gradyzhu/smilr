import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = (props) => {
  return (
    <>
      <Link className="image-container" to={`/photos/${props.photoId}`}>
        {/* <p>{props.photoTitle}</p>
        <p>{props.photoDescription}</p> */}
        <img src={props.photo} className="image"/>
      </Link>
    </>
  )
}

export default PhotosIndexItem;
