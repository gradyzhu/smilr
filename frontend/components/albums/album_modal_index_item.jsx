import React from 'react';

const AlbumModalIndexItem = props => {
  return (
    <div className="album-modal-index-item-container">
      <img src={props.photo} className="album-modal-image"></img>
    </div>
  )
}

export default AlbumModalIndexItem;

