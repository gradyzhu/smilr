import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { 
  fetchAlbums
} from '../../actions/albums_actions';

const mstp = ({entities: {albums}}, ownProps) => {
  return({
    albums: Object.values(albums),
    userId: ownProps.match.params.id,
  });
};

const mdtp = dispatch => {
  return({
    fetchAlbums: id => dispatch(fetchAlbums(id))
  });
};

export default connect(mstp, mdtp)(AlbumsIndex);