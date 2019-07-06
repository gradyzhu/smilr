import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLoggedIn = props => {
  const { handleLogout, id } = props;
  return (
    <div className="nav-bar-logged-in flex-center">
      <div className="navbar-container-logged-in">
        <div className="navbar-left">
          <Link to="/" className="logo">smilr</Link>
        </div>
        <div className="navbar-right-logged-in">
          <Link to="/upload">
            <i className="fas fa-cloud-upload-alt nav-bar-icon"></i>
          </Link>
          <Link to={`/users/${id}/photos`}>
            <i className="fas fa-user nav-bar-icon"></i>
          </Link>
          <button 
            className="sign-out-link" 
            onClick={handleLogout}>Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBarLoggedIn;