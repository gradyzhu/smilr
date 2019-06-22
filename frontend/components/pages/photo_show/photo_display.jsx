import React from 'react';
import PhotoOptionsContainer from './photo_options_container';
import PhotoDisplayCenter from './photo_display_center';

const PhotoDisplay = props => {
  const { imageUrl, photoId } = props;

  return (
    <div className="show-col-container">
      <div className="show-left-col"></div>
      <PhotoDisplayCenter imageUrl={imageUrl} />
      <PhotoOptionsContainer photoId={photoId}/>
    </div>
  )
};

export default PhotoDisplay;

