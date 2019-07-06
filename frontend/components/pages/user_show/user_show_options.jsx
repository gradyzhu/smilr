import React from 'react';
import { Link } from 'react-router-dom';

const UserOptions = props => {
  const { userId, filter } = props;
  
  let albumHighlight;
  let photoStreamHighlight;

  switch(filter) {
    case "albums":
      albumHighlight = "option-tab-index index-flex-center-row";
      photoStreamHighlight = "option-tab index-flex-center-row";
      break;
    case "photostream":
      albumHighlight = "option-tab index-flex-center-row";
      photoStreamHighlight = "option-tab-index index-flex-center-row";
      break;
    default:
      break;
  }

  return (
    <div className="options-bar-container index-flex-center-col">
      <div className="options-bar index-flex-center-row">
        <div className={photoStreamHighlight}>
          <Link 
            to={`/users/${userId}/photos`} 
            className='options-tabs-font-style'>
              Photostream
          </Link>
        </div>
        <div className={albumHighlight}>
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