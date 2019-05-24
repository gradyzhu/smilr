import React from 'react';
import { Link } from 'react-router-dom';

const AlbumsIndexItem = props => {
  const { photos, name, albumId } = props;
  if (props.photos.length == 0) {
    return(
      <div className="album-index-item-empty">
        <Link to={`/albums/${albumId}`}>
          <div className="album-overlay">
            <div className="album-overlay-50">
              <div className="album-flex-col-end">
                <div className="album-details-title flex-row-center">{name}</div>
                <div className="album-details-description flex-row-center">{photos.length} photos</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  } else {
    return(
      <div className="album-index-item-container">
        <Link to={`/albums/${albumId}`}>
          <div className="album-overlay">
            <div className="album-overlay-50">
              <div className="album-flex-col-end">
                <div className="album-details-title flex-row-center">{name}</div>
                <div className="album-details-description flex-row-center">{photos.length} photos</div>
              </div>
            </div>
          </div>
          <img src={photos[0].imageUrl} className="album-index-image"/>
        </Link>
      </div>
    )
  }
}

export default AlbumsIndexItem;