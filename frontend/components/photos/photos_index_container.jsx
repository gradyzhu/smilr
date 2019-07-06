import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LoadMore from './load_more';
import PhotosGallery from './photos_gallery';
import { fetchPhotos, clearPhotos } from '../../actions/photos_actions';

const PhotosIndex = props => {
  const [ offset, setOffset ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(true);
  const { fetchPhotos, clearPhotos, photos, userId } = props;

  useEffect(() => {
    fetchPhotos(offset, userId).then(() => setIsLoading(false));
    return (() => clearPhotos());
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    fetchPhotos(offset + 1, userId)
      .then(() => setOffset(c => c + 1))
      .then(() => setIsLoading(false));
  };

  return (
    <div className="photo-index">
      <PhotosGallery photos={photos} />
      <LoadMore 
        isLoading={isLoading} 
        handleClick={handleClick} />
    </div>
  )
};

const mstp = ({ session, entities: { photos }}, ownProps) => {
  return {
    userId: ownProps.userId,
    photos: Object.values(photos),
    loggedIn: Boolean(session.id),
  };
};

const mdtp = (dispatch) => {
  return ({
    fetchPhotos: (count, id) => dispatch(fetchPhotos(count, id)),
    clearPhotos: () => dispatch(clearPhotos())
  });
};

export default withRouter(connect(mstp, mdtp)(PhotosIndex));
