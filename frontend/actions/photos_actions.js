import * as ApiUtil from '../util/photos_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO_ERRORS = 'REMOVE_PHOTO_ERRORS';
export const REMOVE_PHOTOS = 'REMOVE_PHOTOS';


const receivePhotos = photos => {
  return ({
    type: RECEIVE_PHOTOS,
    photos: photos
  });
};

const receivePhoto = photo => {
  return ({
    type: RECEIVE_PHOTO,
    photo: photo
  });
};

const removePhoto = photo => {
  return ({
    type: DELETE_PHOTO,
    photoId: photo.id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: errors
});

export const clearErrors = () => ({
  type: REMOVE_PHOTO_ERRORS,
});

export const clearPhotos = () => ({
  type: REMOVE_PHOTOS,
});

export const fetchPhotos = (count, id, tagId) => dispatch => {
  return(
    ApiUtil.fetchPhotos(count, id, tagId)
      .then( photos => dispatch(receivePhotos(photos)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const fetchPhoto = id => dispatch => {
  return(
    ApiUtil.fetchPhoto(id)
      .then( photo => dispatch(receivePhoto(photo)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const createPhoto = photo => dispatch => {
  return(
    ApiUtil.createPhoto(photo)
      .then( photo => dispatch(receivePhoto(photo)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const updatePhoto = photo => dispatch => {
  return(
    ApiUtil.updatePhoto(photo)
      .then( photo => dispatch(receivePhoto(photo)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const deletePhoto = id => dispatch => {
  return(
    ApiUtil.deletePhoto(id)
      .then( photo => dispatch(removePhoto(photo)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

// infinite scroll
const RECEIVE_SOME_PHOTOS = "RECEIVE_SOME_PHOTOS";

export const receiveSomePhotos = photos => {
  return({
    type: RECEIVE_SOME_PHOTOS,
    payload: photos
  });
};

export const fetchSomePhotos = () => dispatch => {
  ApiUtils.fetchSomePhotos()
    .then(photos => dispatch(receiveSomePhotos(photos)))
    .fail(errors => dispatch(receiveErrors(errors)));
};

