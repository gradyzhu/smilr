import React from 'react';
import { Link } from 'react-router-dom';

const AlbumsIndexItem = props => {
  if (props.photos.length == 0) {
    return(
      <>
        {/* <Link to={`/albums/${props.albumId}`} className="album-index-item-container">
          hello
        </Link> */}
        <div className="album-index-item-empty">
          <Link to={`/albums/${props.albumId}`}>
            <div className="album-overlay">
              <div className="album-overlay-50">
                <div className="album-flex-col-end">
                  <div className="album-details-title">{props.name}</div>
                  <div className="album-details-description">{props.photos.length} photos</div>
                </div>
              </div>
            </div>
            {/* <img src={props.photos[0].imageUrl} className="album-index-image"/> */}
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
                <div className="album-details-title">{props.name}</div>
                <div className="album-details-description">{props.photos.length} photos</div>
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