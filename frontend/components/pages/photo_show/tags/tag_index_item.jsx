import React from 'react';
import { Link } from 'react-router-dom';

const TagIndexItem = props => {
  const { name, tagId } = props;

  return (
    <Link className="tag-index-item" to={`/tags/${tagId}`}>
      {name}
    </Link>
  )
};

export default TagIndexItem;