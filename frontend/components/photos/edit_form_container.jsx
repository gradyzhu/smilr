import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto } from '../../actions/photos_actions';
import PhotoForm from './photo_form';

const mapStateToProps = ({entities: {photos}}, ownProps) => {
  let photoId = ownProps.match.params.id;
  let photo = photos[photoId];
  return ({
    photoId: photoId,
    photo: photo,
    formType: "Edit"
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    action: (photo) => dispatch(updatePhoto(photo))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
