import React from 'react';
import { Link } from 'react-router-dom';

const UserOptions = props => {
  const { userId } = props;
  
  return (
    <div className="options-bar-container index-flex-center-col">
      <div className="options-bar index-flex-center-row">
        <div className="option-tab-index index-flex-center-row">
          <Link 
            to={`/users/${userId}/photos`} 
            className='options-tabs-font-style'>
              Photostream
          </Link>
        </div>
        <div className="option-tab index-flex-center-row">
          <Link 
            to={`/users/${userId}/albums`} 
            className='options-tabs-font-style'>
              Albums
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserOptions;