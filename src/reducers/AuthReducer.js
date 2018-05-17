import {
  LOGIN_USER_SUCCESS,
  AUTH_USER_LOGOUT,
} from '../actions/types';

const INITIAL_STATE = {
  logged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, logged: true };
    case AUTH_USER_LOGOUT:
      return { ...state, logged: false };
    default:
      return state;
  }
};
