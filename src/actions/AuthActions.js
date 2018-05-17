import {
  LOGIN_USER_SUCCESS,
  AUTH_USER_LOGOUT,
} from './types';
import { logout } from '../services/AuthService';

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