import React from 'react';
import TagsIndex from './tags_index';
import TagsForm from './tags_form';
import TagsTitle from './tags_title';

const PhotoTags = props => {
  const { photoId } = props;
  return (
    <div className="photo-tags-container">
      <TagsForm photoId={photoId}/>
      <TagsTitle />
      <TagsIndex photoId={photoId}/>
    </div>
  )
};

export default PhotoTags