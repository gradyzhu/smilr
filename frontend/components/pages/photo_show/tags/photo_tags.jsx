import React from 'react';
import TagsIndex from './tags_index';
import TagsForm from './tags_form';
import TagsTitle from './tags_title';
import { connect } from 'react-redux';

const PhotoTags = props => {
  const { photoId, showForm, userId } = props;

  let tagForm;
  if (showForm) {
    tagForm = <TagsForm photoId={photoId}/>
  } else {
    tagForm = null;
  }

  return (
    <div className="photo-tags-container">
      {tagForm}
      <TagsTitle />
      <TagsIndex photoId={photoId}/>
    </div>
  )
};

const mstp = ({ session: {id} }, ownProps) => {
  let showForm = id == ownProps.userId ? true : false
  return ({
    photoId: ownProps.photoId,
    showForm: showForm,
  })
}

const mdtp = (dispatch) => {
  return ({
  })
}
export default connect(mstp, mdtp)(PhotoTags);