import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = props => {
  const { component: Component, path, loggedIn, exact } = props;
  const render = props => {
    return !loggedIn ? <Component {...props} /> : <Redirect to="/"/>
  };

  return (
    <Route 
      path={path} 
      exact={exact} 
      render={render}/>
  )
};

const Protected = props => {
  const { component: Component, path, loggedIn, exact } = props;
  const render = props => {
    return loggedIn ? <Component {...props} /> : <Redirect to="/login"/>
  }
  return (
    <Route 
      path={path} 
      exact={exact} 
      render={render}/>
  )
}

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

