import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login, signup, logout } from './actions/session_actions';
import { fetchPhotos, fetchPhoto, createPhoto, updatePhoto, deletePhoto } from './util/photos_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
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

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
