import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = (props) => {
  return (
    <>
      <Link to={`/photos/${props.photoId}`}>
        <img src={props.photo} className="image"/>
      </Link>
    </>
  )
}

export default PhotosIndexItem;
