
import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { 
  fetchPhoto,
  updatePhoto,
  deletePhoto
 } from '../../actions/photos_actions';

const mapStateToProps = ({entities: {photos}}, ownProps) => {
  let photoId = ownProps.match.params.id;
  let photo = photos[photoId];
  return ({
    photoId: photoId, 
    photo
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
