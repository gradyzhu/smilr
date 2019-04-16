import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { fetchAlbums} from '../../actions/albums_actions';
import { fetchUser } from '../../actions/session_actions';

const mstp = ({entities: {albums, users}, session}, ownProps) => {
  return({
    albums: Object.values(albums),
    userId: ownProps.match.params.id,
    users: users,
    sessionId: session.id
  });
};

const mdtp = dispatch => {
  return({
    fetchAlbums: id => dispatch(fetchAlbums(id)),
    fetchUser: id => dispatch(fetchUser(id))
  });
};

export default connect(mstp, mdtp)(AlbumsIndex);