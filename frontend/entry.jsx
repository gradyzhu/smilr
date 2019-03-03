import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchPhotos} from './actions/photos_actions';
import * as PhotosUtil from './util/photos_api_util';
import * as PhotosActions from './actions/photos_actions';

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
  // window.fetchPhotos = PhotosActions.fetchPhotos;
  ReactDOM.render(<Root store={store}/>, root);
});
