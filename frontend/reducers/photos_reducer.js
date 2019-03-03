import { RECEIVE_PHOTOS, RECEIVE_PHOTO, DELETE_PHOTO } from '../actions/photos_actions';
import {merge} from 'lodash';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    case DELETE_PHOTO:
      let newState = merge({}, oldState);
      newState.delete(newState[action.photoId]);
      return newState;
    default:
      return oldState;
  }
};

export default photosReducer;