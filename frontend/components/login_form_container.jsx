import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'signup'
    navLink: <Link to="/login">Log In</Link>
  };
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);