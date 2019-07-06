import React from 'react';
import PhotoOptionsContainer from './photo_options_container';
import Photo from './photo';
import BackToExplore from './back_to_explore';

const PhotoDisplay = props => {
  const { imageUrl, photoId } = props;

  return (
    <div className="photo-display flex-col-center">
      <BackToExplore />
      <Photo imageUrl={imageUrl} />
      <PhotoOptionsContainer photoId={photoId}/>
    </div>
  )
};

export default PhotoDisplay;

