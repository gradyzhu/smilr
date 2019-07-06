import React from 'react';
import PhotoDetailsComments from './photo_details_comments';
import PhotoDetailsUser from './photo_details_user';

const PhotoDetails = props => {
  const { photo: { id, username, userId }} = props;

  return (
    <div className="photo-details-container flex-center">
      <div className="flex-col">
        <PhotoDetailsUser 
          userId={userId} 
          username={username} />
        <PhotoDetailsComments photoId={id}/>
      </div>
    </div>
  )
}

export default PhotoDetails;