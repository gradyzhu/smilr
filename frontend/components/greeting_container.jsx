import Greeting from "./greeting";
import { connect } from 'react-redux';

const mapStateToProps = ({session, entities: {users}}) => {
  // debugger
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

