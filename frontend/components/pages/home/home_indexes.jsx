import React from 'react';
import PhotosIndexContainer from '../../photos/photos_index_container';
import TagPhotosIndex from '../tags_home/tag_photos_index';

const HomeIndexes = ({indexType, tagId }) => {
  switch(indexType) {
    case "explore":
      return <PhotosIndexContainer />
    case "tags":
      return <TagPhotosIndex tagId={tagId} />
    default:
      return null;
  }
};

export default HomeIndexes;