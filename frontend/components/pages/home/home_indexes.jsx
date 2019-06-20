import React from 'react';
import PhotosIndexContainer from '../../photos/photos_index_container';

const HomeIndexes = props => {
  return (
    <div className="index-flex-center-col">
      <div className="index-page-header-container index-flex-center-col">
        <div className="index-page-header index-flex-left">
          <h1 className="options-font-style">
            Explore
          </h1>  
        </div>
      </div>
      <ul className="index-ul-container index-items-flex">
        <div className="index-li-flex">
          <PhotosIndexContainer />
        </div>
      </ul>
    </div>
  )
};

export default HomeIndexes;