import React from 'react';
import EditPhotoFormContainer from '../../photos/edit_photo_form_container';
import CommentsIndexContainer from '../../comments/comments_index_container';
import CommentsFormContainer from '../../comments/comments_form_container';

const PhotoDetailsComments = ({ photoId }) => {
  return (
    <div className="photo-details-wrap">
      <EditPhotoFormContainer photoId={photoId} />
      <div>
        <hr className="display-edit-line"></hr>
        <CommentsIndexContainer/>
        <hr className="display-edit-line"></hr>
        <CommentsFormContainer photoId={photoId} />
      </div>
    </div>
  )
}

export default PhotoDetailsComments;