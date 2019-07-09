import React, { useEffect } from 'react';
import TagIndexItem from './tag_index_item';
import { fetchTags } from '../../../actions/tags_actions';
import { connect } from 'react-redux';

const TagsIndex = props => {
  const { tags, photoId, fetchTags } = props;

  useEffect(() => {
    fetchTags(photoId);
  }, [photoId]);

  if (!tags.length) return null;
  let allTags = tags.map(tag => {
    return <TagIndexItem key={tag.id} name={tag.name} />
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
    fetchTags: photoId => dispatch(fetchTags(photoId))
  })
};

export default connect(mstp, mdtp)(TagsIndex);