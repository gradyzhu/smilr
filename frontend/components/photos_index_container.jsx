import PhotoIndexItem from "./photos_index_item";
import { connect } from 'react-redux';
import { 
  updatePhoto,
  deletePhoto,
  fetchPhoto,
} from "../actions/photos_actions";

const mapStateToProps = ({session, entities: {users}}) => {
  return ({
    currentUser: users[session.id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

