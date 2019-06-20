import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {

  const loggedInNav = () => {
    return (
      <div className="nav-bar-logged-in">
        <div className="navbar-container-logged-in">
          <div className="navbar-left">
            <Link to="/" className="logo">
              smilr
            </Link>
          </div>
          <div className="navbar-right-logged-in">
            <Link to="/upload">
              <i className="fas fa-cloud-upload-alt nav-bar-icon"></i>
            </Link>
            <Link to={`/users/${currentUser.id}/photos`}>
              <i className="fas fa-user nav-bar-icon"></i>
            </Link>
            <button 
              className="sign-out-link" 
              onClick={logout}>Logout
            </button>
          </div>
        </div>
      </div>
    )
  };

  const loggedOutNav = () => (
    <div>
      <nav className="nav-bar-logged-out">
        <div className="navbar-container-logged-out">
          <div className="navbar-left">
            <Link to="/" className="logo">smilr</Link>
          </div>
          <div className="navbar-right-logged-out">
            <Link to='/login' className="login-link">Log In</Link>
            <Link to='/signup' className="signup-link">Sign Up</Link>
          </div>
        </div>
      </nav>
    </div>
  );

  return currentUser ? loggedInNav() : loggedOutNav();
};

export default Navbar;