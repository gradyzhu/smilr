import PhotosIndex from './photos/photos_index';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos_actions';

const mapStateToProps = ({session, entities: {photos}}) => {
  return {
    photos: Object.values(photos),
    loggedIn: Boolean(session.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);


