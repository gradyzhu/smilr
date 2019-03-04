import React from 'react';
import {Link, Redirect } from 'react-router-dom';

const Splash = () => {

  // if (logged_in?) {
  //   return <Redirect to="/photos"/>
  // } else {
    return (
      <>
        <div className="center">
          <div className="splash-content-wrap">
            <h1 className="main-text">Welcome to smilr</h1>
            <p className="sub-text">A photosharing platform for the creative</p>
            <Link to="/signup" className="splash-sign-up-button">Sign Up</Link>
            <div className="splash-bg"></div>
          </div>
        </div>
      </>
    )

  }
// }

export default Splash;