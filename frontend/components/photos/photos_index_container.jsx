import React, { useState, useEffect } from 'react';
import PhotosIndexItem from './photos_index_item';
import LoadMore from './load_more';
import { connect } from 'react-redux';
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

  let allPhotos = photos.map(photo => {
    const { id, imageUrl, title, description, username, userId, comments } = photo;
    return (
      <PhotosIndexItem
        key={id}
        photo={imageUrl}
        photoId={id}
        photoTitle={title}
        photoDescription={description}
        username={username}
        userId={userId}
        commentCount={comments.length} 
      />
    )
  });

  return (
    <div className="flex-col-center">
      <ul className="index-ul-container">
        <div className="index-li-flex">
          {allPhotos}
        </div>
      </ul>
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

export default connect(mstp, mdtp)(PhotosIndex);
