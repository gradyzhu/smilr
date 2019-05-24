import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

const Splash = props => {
  const { path, loggedIn, exact, loggedInComp: LoggedInComp, loggedOutComp: LoggedOutComp } = props;
  const render = props => ( loggedIn ? <LoggedInComp {...props} /> : <LoggedOutComp {...props}/> )
  
  return (
    <Route 
      path={path} 
      exact={exact} 
      render={render} />
  )
};

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export default withRouter(connect(mapStateToProps)(Splash));

