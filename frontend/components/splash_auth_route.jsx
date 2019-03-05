import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

const Splash = ({ path, loggedIn, exact, loggedInComp: LoggedInComp, loggedOutComp: LoggedOutComp }) => {
  return (
    <Route 
      path={path} 
      exact={exact} 
      render={props => (
        loggedIn ? <LoggedInComp {...props} /> : <LoggedOutComp {...props}/>
      )} 
    />
  )
};

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
}

export default withRouter(connect(mapStateToProps)(Splash));

