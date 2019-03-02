
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import LogInForm from './log_in_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
    navLink: <Link to="/login">Log In</Link>
  };
}

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);