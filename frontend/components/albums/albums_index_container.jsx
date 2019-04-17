import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { fetchAlbums} from '../../actions/albums_actions';
import { fetchUser } from '../../actions/session_actions';

const mstp = ({entities: {albums, users}, session}, ownProps) => {
  let userId = parseInt(ownProps.match.params.id, 10);
  let userAlbums = Object.values(albums);

  return({
    albums: userAlbums,
    userId: userId,
    users: users,
    sessionId: session.id
  });
};

const mdtp = dispatch => {
  return({
    fetchAlbums: id => dispatch(fetchAlbums(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPhotos: () => dispatch(fetchPhotos());
  });
};

export default connect(mstp, mdtp)(AlbumsIndex);