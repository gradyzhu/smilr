import React from 'react';

const TagIndexItem = props => {
  const { name } = props;

  return (
    <div className="tag-index-item">
      {name}
    </div>
  )
};

export default TagIndexItem;