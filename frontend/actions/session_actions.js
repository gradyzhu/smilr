import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const REMOVE_USERS = 'REMOVE_USERS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
 
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});

export const clearUsers = sessionUser => ({
  type: REMOVE_USERS,
  sessionUser
});

export const login = user => dispatch => (
  ApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
  ApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
);

export const fetchUser = (id) => dispatch => (
  ApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);



window.login = login;
window.signup = signup;
window.logout = logout; 