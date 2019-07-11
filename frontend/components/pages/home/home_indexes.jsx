import React from 'react';
import PhotosIndexContainer from '../../photos/photos_index_container';
import TagPhotosIndexContainer from '../tags_home/tag_photos_index';

const HomeIndexes = ({indexType, tagId }) => {
  switch(indexType) {
    case "explore":
      return <PhotosIndexContainer />
    case "tags":
      return <TagPhotosIndexContainer tagId={tagId} />
    default:
      return null;
  }
};

export default HomeIndexes;