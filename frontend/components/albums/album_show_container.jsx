import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchPhotos } from '../../actions/photos_actions';
import { fetchAlbum } from '../../actions/albums_actions';

const mstp = (state, ownProps) => {
  return({
    albumId: ownProps.match.params.id
  });
};

const mdtp = dispatch => {
  return({
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchAlbum: () => dispatch(fetchPhotos())
  });
};

export default connect(mstp, mdtp)(AlbumShow);
