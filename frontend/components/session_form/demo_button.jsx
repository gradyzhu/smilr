import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const DemoButton = ({ login, user }) => {
  let demoUser;

  switch(user) {
    case "josh":
      demoUser = { username: "josh", password: "password" };
      break;
    case "lisa":
      demoUser = { username: "lisa", password: "password" };
      break;
    default: 
      break;
  }

  const handleLogin = () => {
    login(demoUser);
  };

  return (
    <div className="splash-demo-button" onClick={handleLogin}>{demoUser.username}</div>
  )
};

const mstp = (state, ownProps) => {
  return ({
  });
};

const mdtp = dispatch => {
  return ({
    login: (user) => dispatch(login(user))
  });
};

export default connect(mstp, mdtp)(DemoButton);
