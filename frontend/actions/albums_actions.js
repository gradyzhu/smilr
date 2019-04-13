import * as ApiUtil from '../util/albums_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REMOVE_ALBUM_ERRORS = 'REMOVE_ALBUM_ERRORS';

const receiveAlbums = albums => {
  return ({
    type: RECEIVE_ALBUMS,
    albums
  });
};

const receiveAlbum = album => {
  return ({
    type: RECEIVE_ALBUM,
    album
  });
};

const removeAlbum = album => {
  return ({
    type: DELETE_ALBUM,
    albumId: album.id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: REMOVE_ALBUM_ERRORS,
});

export const fetchAlbums = user_id => dispatch => {
  return(
    ApiUtil.fetchAlbums(user_id)
      .then(albums => dispatch(receiveAlbums(albums)))
      .fail(error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const fetchAlbum = id => dispatch => {
  return(
    ApiUtil.fetchAlbum(id)
      .then(album => dispatch(receiveAlbum(album)))
      .fail(error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const createAlbum = album => dispatch => {
  debugger;
  return(
    ApiUtil.createAlbum(album)
      .then(album => dispatch(receiveAlbum(album)))
      .fail(error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const updateAlbum = album => dispatch => {
  return(
    ApiUtil.updateAlbum(album)
      .then(album => dispatch(receiveAlbum(album)))
      .fail(error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const deleteAlbum = id => dispatch => {
  return(
    ApiUtil.deleteAlbum(id)
      .then(album => dispatch(removeAlbum(album)))
      .fail(error => dispatch(receiveErrors(error.responseJSON)))
  );
};

// window.fetchAlbums = fetchAlbums;
// window.fetchAlbum = fetchAlbum;
// window.createAlbum = createAlbum;
// window.updateAlbum = updateAlbum;
// window.deleteAlbum = deleteAlbum;