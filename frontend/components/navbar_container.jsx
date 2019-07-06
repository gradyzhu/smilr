import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/session_actions";
import { withRouter } from 'react-router-dom';
import NavBarLoggedIn from './navbar_logged_in';
import NavBarLoggedOut from './navbar_logged_out';

const Navbar = props => {
  const { currentUser, logout, history } = props;

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return currentUser ? <NavBarLoggedIn id={currentUser.id} handleLogout={handleLogout} /> : <NavBarLoggedOut />
};

const mstp = ({session, entities: {users}}, ownProps) => {
  return ({
    currentUser: users[session.id],
    history: ownProps.history
  });
};

const mdtp = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default withRouter(connect(mstp, mdtp)(Navbar));

