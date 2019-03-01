import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  // debugger
  const personalGreeting = () => {
    // debugger
    return (
    <div>
      <h2>You've made it.</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )};
  
  const sessionLinks = () => (
    <nav>
      <div>
        <div>
          <Link to='/login' className="login-link">Login</Link>
          <Link to='/signup' className="signup-link">Sign Up</Link>
        </div>
      </div>
      <h2>You're NOT logged in fool</h2>
    </nav>
  );
  // debugger
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;