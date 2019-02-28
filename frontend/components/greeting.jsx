import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const personalGreeting = () => (
    <div>
      <h2>You're logged in, son. (Greetings Container)</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
  
  const sessionLinks = () => (
    <nav>
      <h2>You're not logged in. (Greetings Container)</h2>
      <Link to='/login'>Login</Link>
      &nbsp;
      <Link to='/signup'>Sign Up</Link>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
  // return personalGreeting();
};

export default Greeting;