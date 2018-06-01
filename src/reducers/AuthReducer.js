import {
  LOGIN_USER_SUCCESS,
  AUTH_USER_LOGOUT,
  SIGN_UP_START,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,

} from '../actions/types';
import { isLoggedIn } from '../services/AuthService';

const INITIAL_STATE = {
  logged: isLoggedIn(),
  signUpStarted: false,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, logged: true };
    case AUTH_USER_LOGOUT:
      return { ...state, logged: false };
    case SIGN_UP_START:
      return { 
        ...state,
        signUpStarted: true,
        message: '',
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStarted: false,
        message: action.payload.message,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpStarted: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
