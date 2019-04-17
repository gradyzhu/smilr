import CreateAlbumModal from './create_album_modal';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photos_actions';
import { createAlbum } from '../../actions/albums_actions';


const mstp = ({entities: {photos}, session}) => {
  return ({
    sessionId: session.id,
    photos: Object.values(photos)
  });
};

const mdtp = dispatch => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    createAlbum: album => dispatch(createAlbum(album))
  });
};

export default connect(mstp, mdtp)(CreateAlbumModal);