import {
  LOGIN_USER_SUCCESS,
  AUTH_USER_LOGOUT,
  SIGN_UP_START,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  USERS,
} from '../actions/types';
import { isLoggedIn } from '../services/AuthService';
import { UsersReducer } from './Users';
import { checkType } from '../misc/misc';

const INITIAL_STATE = {
  logged: isLoggedIn(),
  signUpStarted: false,
  message: '',
  userInfo: {
    mail: '',
  },
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
    // serve userInfo part of state
    case checkType(action.type, USERS.GET_USER_INFO):
      return {
        ...state,
        userInfo: UsersReducer(state.userInfo, action),
      }
    default:
      return state;
  }
};
