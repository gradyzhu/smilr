import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLoggedOut = props => {
  return (
    <div>
      <nav className="nav-bar-logged-out flex-center">
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
}

export default NavBarLoggedOut;