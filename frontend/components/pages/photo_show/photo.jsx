import React from 'react';

const Photo = ({ imageUrl }) => {
  return (
    <div className="show-col-container">
      <div className="show-mid-col">
        <img className="show-image" src={imageUrl}/>
      </div>
    </div>
  )
}

export default Photo;
