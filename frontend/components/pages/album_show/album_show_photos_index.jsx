import React from 'react';
import AlbumShowPhotoIndexItem from './album_show_photo_index_item';

const AlbumShowPhotosIndex = ({ photos }) => {
  let albumPhotos = photos.map(photo => {
    const { id, username, title, imageUrl } = photo;
    return (
      <AlbumShowPhotoIndexItem
        key={id}
        id={id}
        title={title}
        username={username}
        imageUrl={imageUrl}
      />
    )
  });

  return (
    <ul className="index-ul-container-1 index-items-flex">
      <div className="index-li-flex">
        {/* {albumPhotos} */}
      </div>
    </ul>
  )
}

export default AlbumShowPhotosIndex;