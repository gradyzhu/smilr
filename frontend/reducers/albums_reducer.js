import { 
  RECEIVE_ALBUMS, 
  RECEIVE_ALBUM, 
  DELETE_ALBUM,
  REMOVE_ALBUMS
 } from '../actions/albums_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return {[action.album.id]: action.album};
    case DELETE_ALBUM:
      delete newState[action.albumId];
      return newState;
    case REMOVE_ALBUMS:
      return {};
    default:
      return oldState;
  }
};

export default albumsReducer;