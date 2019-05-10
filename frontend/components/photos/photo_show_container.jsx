import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { 
  fetchPhoto,
  updatePhoto,
  deletePhoto,
  clearPhotos
 } from '../../actions/photos_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = ({entities: {photos, users}}, ownProps) => {
  let photoId = ownProps.match.params.id;

  if (Object.keys(photos).length == 0) {
    return ({
      photoId: photoId,
      user: {}
    });
  } else {
    let photo = photos[photoId];
    let user = users[photo.userId];
    return ({
      photoId: photoId,
      user: user,
      photo
    });
  }
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    clearPhotos: () => dispatch(clearPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
