import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const removeErrors = errors => ({
  type: REMOVE_SESSION_ERRORS,
  errors
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
