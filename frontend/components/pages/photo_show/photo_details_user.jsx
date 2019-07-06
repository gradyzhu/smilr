import React from 'react';
import { Link } from 'react-router-dom';

const PhotoDetailsUser = props => {
  const { username, userId } = props;

  return (
    <div className="flex-row-space">
      <Link 
        to={`/users/${userId}/photos`}
        className="display-username">
          {username}
      </Link>
      <button className="blue-button follow-custom">
        Coming Soon
      </button>
    </div>
  )
}

export default PhotoDetailsUser;