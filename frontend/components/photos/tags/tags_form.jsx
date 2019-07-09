import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTag } from '../../../actions/tags_actions';

const TagForm = props => {
  const { createTag, photoId } = props;
  const [ tagName, setTagName ] = useState("");

  const handleInput = event => {
    setTagName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let tag = { name: tagName, photo_id: photoId };
    createTag(tag);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="tag-input"
        type="text" 
        placeholder="tag" 
        value={tagName} 
        onChange={handleInput} />
      <button className="tag-button">
        Add
      </button>
    </form>
  )
};

const mstp = (state, ownProps) => {
  return ({
    photoId: ownProps.photoId
  });
};

const mdtp = dispatch => {
  return ({
    createTag: tag => dispatch(createTag(tag))
  });
};

export default connect(mstp, mdtp)(TagForm);

