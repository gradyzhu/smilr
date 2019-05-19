import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as AlbumAjax from "./util/albums_api_util";
import * as ApiActions from "./actions/albums_actions";
import * as CommentsApi from "./util/comments_api_util";


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
