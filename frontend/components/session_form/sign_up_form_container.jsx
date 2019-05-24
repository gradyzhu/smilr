import React from 'react';
import SignUpForm from "./sign_up_form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, clearErrors } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: "Sign Up",
    navLink: <Link to="/signup">Log In</Link>
  });
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);