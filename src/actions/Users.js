import { USERS } from './types';
import { usersAPI } from '../api/User';

export const getUserInfoByID = (userID) => {
  return (dispatch) => {
    dispatch({ type: USERS.GET_USER_INFO.TRY });
    usersAPI.getUserInfo(
      userID,
      (response) => {},
      () => {},
    );
  };
};
