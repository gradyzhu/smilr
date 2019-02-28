import SignUpForm from "./greeting";
import { connect } from 'react-redux';

const mapStateToProps = ({session, entities: {users}}) => {
  return ({
    session: users[session.id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);