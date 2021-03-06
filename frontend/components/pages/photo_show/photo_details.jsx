import React from 'react';
import PhotoDetailsComments from './photo_details_comments';
import PhotoDetailsUser from './photo_details_user';
import PhotoTags from './tags/photo_tags';

const PhotoDetails = props => {
  const { photo: { id, username, userId, sessionId }} = props;

  return (
    <div className="photo-details-container">
      <div className="photo-user-comments">
        <PhotoDetailsUser 
          userId={userId} 
          username={username} />
        <PhotoDetailsComments photoId={id}/>
      </div>
      <PhotoTags 
        userId={userId}
        photoId={id}
        sessionId={sessionId}/>
    </div>
  )
}

export default PhotoDetails;