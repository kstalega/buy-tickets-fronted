import {
  LOGIN_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  logged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
