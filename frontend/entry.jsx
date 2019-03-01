import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login } from './actions/session_actions';
import { signup } from './actions/session_actions';
import { logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // console.log(window.currentUser);
  // debugger
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = { 
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  // window.login = login;
  // window.signup = signup;
  // window.logout = logout; 
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
