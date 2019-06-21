import React, { useState, useEffect } from 'react';
import PhotosIndexItem from './photos_index_item';
import LoadMore from './load_more';

const PhotosIndex = props => {
  const [ offset, setOffset ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(true);
  const { fetchPhotos, clearPhotos, photos, userId } = props;

  useEffect(() => {
    fetchPhotos(offset, userId).then(() => setIsLoading(false));
    return (() => clearPhotos());
  }, [ userId ]);

  const handleClick = () => {
    setIsLoading(true);
    fetchPhotos(offset + 1, userId)
      .then(() => setOffset(offset + 1))
      .then(() => setIsLoading(false));
  };

  let allPhotos = photos.map(photo => {
    return (
      <PhotosIndexItem
        key={photo.id}
        photo={photo.imageUrl}
        photoId={photo.id}
        photoTitle={photo.title}
        photoDescription={photo.description}
        username={photo.username}
        userId={photo.userId}
        commentCount={photo.comments.length} 
      />
    )
  });
  
  return (
    <div className="flex-col-center">
      <ul className="index-ul-container">
        <div className="index-li-flex">
          {allPhotos}
        </div>
      </ul>
      <LoadMore 
        isLoading={isLoading}
        handleClick={handleClick}
      />
    </div>
  )
};

export default PhotosIndex;

