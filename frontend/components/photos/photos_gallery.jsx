import React from 'react';
import Gallery from '../gallery/Gallery';
import PhotoIndexItemOverlay from './photo_index_item_overlay';

const PhotosGallery = ({ photos }) => {
  let images = photos.map(photo => {
    const { title, imageUrl, width, height, username, id, comments } = photo;
    return {
      id: id,
      src: imageUrl,
      thumbnail: imageUrl,
      thumbnailWidth: width,
      thumbnailHeight: height,
      customOverlay: 
        <PhotoIndexItemOverlay
          key={id}
          username={username}
          title={title}
          comments={comments}
        />
    };
  });

  return (
    <div className="gallery-size">
      <Gallery
        images={images}
        enableImageSelection={false}
        rowHeight={250}
        margin={2}
      />  
    </div>
  )
}

export default PhotosGallery;