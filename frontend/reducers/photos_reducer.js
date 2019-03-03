import { 
  RECEIVE_PHOTOS, 
  RECEIVE_PHOTO, 
  DELETE_PHOTO } from '../actions/photos_actions';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;
    case DELETE_PHOTO:
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
};

export default photosReducer;