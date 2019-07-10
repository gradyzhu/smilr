import React from 'react';
import { Link } from 'react-router-dom';

const TagOptions = props => {
  return (
    <div className="options-bar-container index-flex-center-col">
      <div className="options-bar index-flex-center-row">
        <div className="option-tab-explore index-flex-center-row">
          <Link to="/tags" className='options-tabs-font-style'>
            Tags
          </Link>
        </div>
      </div>
    </div>
  )
};

export default TagOptions;
