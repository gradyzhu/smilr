import PhotosIndex from './photos_index';
import { connect } from 'react-redux';
import { 
  fetchPhotos,
  clearPhotos
 } from '../../actions/photos_actions';

const mapStateToProps = ({session, entities: {photos}}) => {
  return {
    photos: Object.values(photos),
    loggedIn: Boolean(session.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: (count, id) => dispatch(fetchPhotos(count, id)),
    clearPhotos: () => dispatch(clearPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);
