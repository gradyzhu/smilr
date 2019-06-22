import React from 'react';

const AlbumOptionsBar = props => {
  const { handleShowModal, albumOptions } = props;
  
  return (
    <div className="full-width flex-center album-options-container">
      <div className="album-options flex-row-end">
        <div className={albumOptions}>
          <button
            onClick={handleShowModal}
            className="create-new-alb-button flex-row-end">
              + New Album
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlbumOptionsBar;