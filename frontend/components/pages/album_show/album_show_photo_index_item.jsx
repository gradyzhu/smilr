import React from 'react';
import { Link } from 'react-router-dom';

const AlbumShowPhotoIndexItem = props => {
  const { id, title, username, imageUrl } = props;
  
  return (
    <div key={id} className="album-show-index-item-container">
      <Link to={`/photos/${id}`}>
        <div className="album-show-overlay">
          <div className="album-show-overlay-50">
            <div className="album-show-flex-col-end">
              <div className="details-title">{title}</div>
              <div className="details-username">by {username}</div>
            </div>
          </div>
        </div>
        <img src={imageUrl} className="album-show-image"></img>
      </Link>
    </div>
  )
}

export default AlbumShowPhotoIndexItem;