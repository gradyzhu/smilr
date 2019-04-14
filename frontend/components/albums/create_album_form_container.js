import CreateAlbumForm from './create_album_form';
import { connect } from 'react-redux';
import { createAlbum } from '../../actions/albums_actions';

const mstp = (state) => { 
  return ({
    sessionId: state.session.id,
  });
};

const mdtp = dispatch => {
  return ({
    createAlbum: album => dispatch(createAlbum(album))
  });
};

export default connect(mstp, mdtp)(CreateAlbumForm);