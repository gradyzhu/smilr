import * as ApiUtils from '../util/tags_api_util';

// actions
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";
export const REMOVE_TAGS = "REMOVE_TAGS";

// action creator
export const receiveTag = tag => {
  return ({
    type: RECEIVE_TAG,
    payload: tag
  });
};

export const receiveTags = tags => {
  return ({
    type: RECEIVE_TAGS,
    payload: tags
  });
};

export const clearTags = () => {
  return ({
    type: REMOVE_TAGS
  });
};
export const receiveErrors = errors => {
  return ({
    type: RECEIVE_TAG_ERRORS,
    errors: errors
  });
};

export const fetchTags = photoId => dispatch => {
  return (
    ApiUtils.fetchTags(photoId)
      .then( tags => dispatch(receiveTags(tags)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const fetchTag = tagId => dispatch => {
  return (
    ApiUtils.fetchTag(tagId)
      .then( tag => dispatch(receiveTag(tag)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const createTag = tag => dispatch => {
  return (
    ApiUtils.createTag(tag)
      .then( tag => dispatch(receiveTag(tag)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
    );
};

window.createTag = createTag;
window.fetchTags = fetchTags;