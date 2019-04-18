import React from 'react';
import { Link } from 'react-router-dom';

const AlbumsIndexItem = props => {
  if (props.photos.length == 0) {
    return(
      <>
        <div className="album-index-item-empty">
          <Link to={`/albums/${props.albumId}`}>
            <div className="album-overlay">
              <div className="album-overlay-50">
                <div className="album-flex-col-end">
                  <div className="album-details-title flex-row-center">{props.name}</div>
                  <div className="album-details-description flex-row-center">{props.photos.length} photos</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
  } else {
    return(
      <div className="album-index-item-container">
        <Link to={`/albums/${props.albumId}`}>
          <div className="album-overlay">
            <div className="album-overlay-50">
              <div className="album-flex-col-end">
                <div className="album-details-title flex-row-center">{props.name}</div>
                <div className="album-details-description flex-row-center">{props.photos.length} photos</div>
              </div>
            </div>
          </div>
          <img src={props.photos[0].imageUrl} className="album-index-image"/>
        </Link>
      </div>
    )
  }
}

export default AlbumsIndexItem;