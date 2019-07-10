import React, { useEffect } from 'react';
import TagIndexItem from './tag_index_item';
import { fetchTags, clearTags } from '../../../../actions/tags_actions';
import { connect } from 'react-redux';

const TagsIndex = props => {
  const { tags, photoId, fetchTags, clearTags } = props;

  useEffect(() => {
    fetchTags(photoId);
    return () => clearTags();
  }, [photoId]);

  if (!tags.length) return null;

  let allTags = tags.map(tag => {
    return <TagIndexItem 
              key={tag.id} 
              name={tag.name} 
              tagId={tag.id} 
            />
  });
  
  return (
    <ul className="tag-index">
      {allTags}
    </ul>
  )
};

const mstp = ({ entities: { tags }}, ownProps) => {
  return ({
    tags: Object.values(tags),
    photoId: ownProps.photoId
  })
};

const mdtp = dispatch => {
  return ({
    fetchTags: photoId => dispatch(fetchTags(photoId)),
    clearTags: () => dispatch(clearTags())
  })
};

export default connect(mstp, mdtp)(TagsIndex);