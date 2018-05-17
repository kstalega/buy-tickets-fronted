import {
  LOGIN_USER_SUCCESS,
  AUTH_USER_LOGOUT,
  SIGN_UP_START,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS
} from './types';
import { logout } from '../services/AuthService';
import { signUpUser } from '../api/User';

const userSignUpFail = (dispatch) => {
  dispatch({
    type: SIGN_UP_FAILURE,
  });
};

const userSignUpSuccess = (dispatch, response) => {
  if (response.success) {
    dispatch({
      type: SIGN_UP_SUCCESS,
    });
  } else {
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: {
        message: response.ErrorContainer.Message,
      },
    });
  }
};

// here are all actions creators
export const userLogged = () => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {},
  };
};

export const tryToLogoutUser = () => {
  logout();
  return {
    type: AUTH_USER_LOGOUT,
    payload: {},
  };
}

export const tryToSignUpUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP_START });
    signUpUser(
      userData,
      (response) => { userSignUpSuccess(dispatch, response); },
      () => userSignUpFail(dispatch),
    );
  };
};
