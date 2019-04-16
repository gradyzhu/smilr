import React from 'react';
import { Link } from 'react-router-dom';

const AlbumsIndexItem = props => {
  return(
    <>
      <Link to={`/albums/${props.albumId}`} className="album-index-item-container">
      </Link>
    </>
  )
}

export default AlbumsIndexItem;