import { 
  RECEIVE_PHOTOS, 
  RECEIVE_PHOTO, 
  DELETE_PHOTO,
  REMOVE_PHOTOS } from '../actions/photos_actions';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return {[action.photo.id]: action.photo};
    case DELETE_PHOTO:
      delete newState[action.photoId];
      return newState;
    case REMOVE_PHOTOS:
      return {};
    default:
      return oldState;
  }
};

export default photosReducer;