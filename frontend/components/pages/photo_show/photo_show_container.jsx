import React, { useEffect } from 'react';
import PhotoDisplay from './photo_display';
import PhotoDetails from './photo_details';
import { connect } from 'react-redux';
import {
  fetchPhoto, 
  clearPhotos 
} from '../../../actions/photos_actions';

const PhotoShow = props => {
  const { fetchPhoto, clearPhotos, photo, photoId } = props;

  useEffect(() => {
    fetchPhoto(photoId);
    return (() => clearPhotos(photoId));
  }, [photoId]);

  if (!photo) return null;
  return (
    <>
      <PhotoDisplay 
        imageUrl={photo.imageUrl}
        photoId={photoId}
      />
      <PhotoDetails photo={photo}/>
    </>
  )
};

const mstp = ({ entities: { photos } }, ownProps) => {
  let photoId = Number(ownProps.match.params.id);
  let photo = photos[photoId];
  return {
    photoId: photoId,
    photo: photo
  };
};

const mdtp = dispatch => {
  return ({
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    clearPhotos: () => dispatch(clearPhotos())
  });
};

export default connect(mstp, mdtp)(PhotoShow);
