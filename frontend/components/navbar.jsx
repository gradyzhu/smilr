import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';



const Greeting = ({currentUser, logout}) => {

  // const handleSubmit = (e) {
  //   logout();
  //   withRouter();
  // }

  const personalGreeting = () => {
    return (
    <div>
      <div>
        <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo">smilr</Link>
        </div>
          <div className="navbar-right">
            <button className="sign-out-link" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )};

  const sessionLinks = () => (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          {/* <img src={window.images.logo} /> */}
          <Link to="/" className="logo">smilr</Link>
        </div>
        <div className="navbar-right">
          <Link to='/login' className="login-link">Log In</Link>
          <Link to='/signup' className="signup-link">Sign Up</Link>
        </div>
      </div>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;