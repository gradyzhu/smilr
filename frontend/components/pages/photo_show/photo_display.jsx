import React from 'react';
import PhotoOptionsContainer from './photo_options_container';
import Photo from './photo';
import BackToExplore from './back_to_explore';

const PhotoDisplay = props => {
  const { imageUrl, photoId, photoUserId } = props;

  return (
    <div className="photo-display">
      <BackToExplore />
      <Photo imageUrl={imageUrl} />
      <PhotoOptionsContainer photoUserId={photoUserId} photoId={photoId}/>
    </div>
  )
};

export default PhotoDisplay;

