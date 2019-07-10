import React, { useEffect } from 'react';
import PhotosGallery from '../../photos/photos_gallery';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../../actions/photos_actions';
import { SyncLoader } from 'react-spinners';

const TagPhotosIndex = props => {
  const { photos, fetchPhotos, tagId } = props;
  useEffect(() => {
    fetchPhotos(0, 0, tagId);
  }, [ tagId ]);

  if (!photos.length) {
    return (
      <div className="tag-show-loader">
        <SyncLoader color={'#919191'} />
      </div>
    )
  } else {
    return (
      <div className="photo-index">
        <PhotosGallery photos={photos} />
      </div>
    )
  }
};

const mstp = ({ entities: { photos }}, ownProps ) => {

  let allPhotos = photos ? Object.values(photos) : []
  let tagId = ownProps.tagId
  return ({
    photos: allPhotos,
    tagId: tagId
  })
}

const mdtp = dispatch => {
  return ({
    fetchPhotos: (count, userId, tagId) => dispatch(fetchPhotos(count, userId, tagId))
  })
}
export default connect(mstp, mdtp)(TagPhotosIndex);