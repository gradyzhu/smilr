import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { 
  fetchPhoto,
  updatePhoto,
  deletePhoto,
  clearPhotos
 } from '../../actions/photos_actions';

const mapStateToProps = ({entities: {photos}}, ownProps) => {
  let photoId = ownProps.match.params.id;
  if (Object.keys(photos).length == 0) {
    return ({
      photoId: photoId,
      photo: {}
    });
  } else {
    let photo = photos[photoId];
    return ({
      photoId: photoId,
      photo
    });
  }
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    clearPhotos: () => dispatch(clearPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
