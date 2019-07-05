import React from 'react';
import { Link } from 'react-router-dom';

const BackToAlbums = ({ userId }) => {
  return (
    <div className="album-back-bar flex-row-left">
      <Link to={`/users/${userId}/albums`} className="show-back-to-albs flex-row-left">
        <i className="fas fa-arrow-left"></i>
        <p className="show-back-to-albs">Back to albums</p>
      </Link>
    </div>
  )
}

export default BackToAlbums;