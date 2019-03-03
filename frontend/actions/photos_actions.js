import * as ApiUtil from '../util/photos_api_util';
import { receiveErrors } from './session_actions';


export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

const receivePhotos = photos => {
  return ({
    type: RECEIVE_PHOTOS,
    photos
  });
};

const receivePhoto = photo => {
  return ({
    type: RECEIVE_PHOTO,
    photo
  });
};

const removePhoto = photo => {
  return ({
    type: DELETE_PHOTO,
    photoId: photo.id
  });
};

export const fetchPhotos = () => dispatch => (
  ApiUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchPhoto = id => dispatch => (
  ApiUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createPhoto = photo => dispatch => (
  ApiUtil.createPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updatePhoto = photo => dispatch => (
  ApiUtil.updatePhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deletePhoto = id => dispatch => (
  ApiUtil.deletePhoto(id).then((photo) => (
    dispatch(removePhoto(photo))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);
