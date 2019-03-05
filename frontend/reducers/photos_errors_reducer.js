import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  RECEIVE_PHOTO_ERRORS,
  REMOVE_PHOTO_ERRORS
}
  from '../actions/photos_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let clear = [];
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return clear;
    case RECEIVE_PHOTO:
      return clear;
    case RECEIVE_PHOTO_ERRORS:
      debugger
      return action.errors;
    case REMOVE_PHOTO_ERRORS:
      return clear;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;