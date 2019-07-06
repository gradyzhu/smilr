import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LoadMore from './load_more';
import Gallery from '../../gallery/Gallery';
import PhotoIndexItemOverlay from './photo_index_item_overlay';
import { fetchPhotos, clearPhotos } from '../../actions/photos_actions';

const PhotosIndex = props => {
  const [ offset, setOffset ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(true);
  const { fetchPhotos, clearPhotos, photos, userId, history: { push } } = props;

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

  let images = photos.map(photo => {
    const { title, imageUrl, width, height, username, id, comments } = photo;
    return {
      id: id,
      src: imageUrl,
      thumbnail: imageUrl,
      thumbnailWidth: width,
      thumbnailHeight: height,
      customOverlay: 
        <PhotoIndexItemOverlay
          key={id}
          username={username}
          title={title}
          length={comments.length}
        />
    };
  });

  return (
    <div className="photo-index">
      <div className="gallery-size">
        <Gallery
          images={images}
          enableImageSelection={false}
          rowHeight={320}
        />
      </div>
      <LoadMore 
        isLoading={isLoading}
        handleClick={handleClick}
      />
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
