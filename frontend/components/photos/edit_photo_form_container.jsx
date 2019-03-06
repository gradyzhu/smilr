import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto } from '../../actions/photos_actions';
import EditPhotoForm from './edit_photo_form';

const mapStateToProps = ({entities: {photos}}, ownProps) => {
  let photoId = ownProps.photoId;
  let photo = photos[photoId];
  return ({
    photoId: photoId,
    photo: photo,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm);
