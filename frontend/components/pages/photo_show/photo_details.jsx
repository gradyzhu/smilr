import React from 'react';
import { Link } from 'react-router-dom';
import EditPhotoFormContainer from '../../photos/edit_photo_form_container';
import CommentsIndexContainer from '../../comments/comments_index_container';
import CommentsFormContainer from '../../comments/comments_form_container';

const PhotoDetails = props => {
  const { photo: { id, username, userId } } = props;

  return (
    <div className="photo-details-container flex-center">
      <div className="flex-col">
        <div className="flex-row-space">
          <Link 
            to={`/users/${userId}/photos`}
            className="display-username">
              {username}
          </Link>
          <button className="blue-button follow-custom">
            Follow
          </button>
        </div>
        <div className="photo-details-wrap">
          <EditPhotoFormContainer photoId={id} />
          <div>
            <hr className="display-edit-line"></hr>
            <CommentsIndexContainer/>
            <hr className="display-edit-line"></hr>
            <CommentsFormContainer photoId={id} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PhotoDetails;