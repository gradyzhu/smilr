import React from 'react';
import { Link } from 'react-router-dom';

const HomeOptions = props => {
  return (
    <div className="options-bar-container index-flex-center-col">
      <div className="options-bar index-flex-center-row">
        <div className="option-tab-explore index-flex-center-row">
          <Link to="/" className='options-tabs-font-style'>
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
};

export default HomeOptions;
