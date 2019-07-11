import React from 'react';
import AlbumModalIndexItem from './album_modal_index_item';

const ModalPhotoIndex = ({ photos, handleClick }) => {
  const userPhotos = photos.map(photo => {
    if (!photo) return null;
    return(
      <div 
        className="album-modal-index-item-container flex-row-center"
        key={photo.id}>
        <input 
          id={photo.id} 
          onClick={handleClick}
          type="checkbox" 
          className="checkbox-style"></input>
        <AlbumModalIndexItem photo={photo.imageUrl}/>
      </div>
    )
  });

  return (
    <div className="step-2-container flex-col-center">
      <div className="step-text flex-row-start">
        <h1 className="step-text-2">Step 2 - Select photos</h1>
      </div>
      <div className="modal-photo-index">
        <div className="flex-row-start-top-left">
          <div className="modal-index-items flex-row-start-top-left">
            {userPhotos}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPhotoIndex;