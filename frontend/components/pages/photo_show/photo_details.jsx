import React from 'react';
import PhotoDetailsComments from './photo_details_comments';
import PhotoDetailsUser from './photo_details_user';
import TagsIndex from '../../photos/tags/tags_index';
import TagsForm from '../../photos/tags/tags_form';

const PhotoDetails = props => {
  const { photo: { id, username, userId }} = props;

  return (
    <div className="photo-details-container flex-align-top">
      <div className="flex-col">
        <PhotoDetailsUser 
          userId={userId} 
          username={username} />
        <PhotoDetailsComments photoId={id}/>
      </div>
      <div className="photo-tags-container">
        <TagsForm photoId={id}/>
        <TagsIndex photoId={id}/>
      </div>
    </div>
  )
}

export default PhotoDetails;