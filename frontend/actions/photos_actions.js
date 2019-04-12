import * as ApiUtil from '../util/photos_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO_ERRORS = 'REMOVE_PHOTO_ERRORS';

//actions creators
const receivePhotos = ({photos, users}) => {
  return ({
    type: RECEIVE_PHOTOS,
    photos: photos
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

export const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: REMOVE_PHOTO_ERRORS,
});

// thunk actions creators
export const fetchPhotos = (id) => dispatch => (
  ApiUtil.fetchPhotos(id).then(photos => (
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

// window.fetchPhotos = fetchPhotos;
// window.fetchPhoto = fetchPhoto;
// window.createPhoto = createPhoto;
// window.updatePhoto = updatePhoto;
// window.deletePhoto = deletePhoto;