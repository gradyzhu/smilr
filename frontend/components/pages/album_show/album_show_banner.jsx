import React from 'react';

const AlbumShowBanner = props => {
  const { name, description, length, bannerImage } = props;

  return (
    <div className="album-head">
      <div className="album-head-overlay">
        <div className="album-head-overlay-50 flex-row-end">
          <div className="test">
            <h1 className="album-name flex-row-center">{name}</h1>
            <h1 className="album-description flex-row-center">{description}</h1>
            <h1 className="album-length flex-row-center">{length} photos</h1>
          </div>
        </div>
      </div>
      <img 
        src={bannerImage}
        className="album-head-image">
      </img>
    </div>
  )
}

export default AlbumShowBanner;
