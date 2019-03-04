import PhotosIndex from './photos_index';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos_actions';

const mapStateToProps = ({entities: {photos}}) => {
  return {
    photos: Object.values(photos)
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);
