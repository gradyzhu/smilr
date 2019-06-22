import React from 'react';
import { Link } from 'react-router-dom';

const PhotoDisplayCenter = props => {
  const { imageUrl } = props;

  return (
    <div className="show-mid-col">
      <Link to={`/`} className="show-back-to-ex flex-row-left">
        <i className="fas fa-arrow-left"></i>
        <p className="show-back-text">
          Back to explore
        </p>
      </Link>
      <img className="show-image" src={imageUrl}/>
    </div>
  )
}

export default PhotoDisplayCenter;
