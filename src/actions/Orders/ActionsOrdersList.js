import { ORDERS } from '../types';
import { ordersAPI } from '../../api/Orders';

function ActionsOrdersFetchAllRequestSuccess(dispatch, response) {
  if (response.success) {
    dispatch({
      type: ORDERS.FETCH.SUCCESS,
      payload: {
        response,
      },
    });
  } else {
    dispatch({
      type: ORDERS.FETCH.ERROR,
      payload: {
        response,
      },
    });
  }
}

export const ActionsOrdersFetchAll = () => {
  return (dispatch) => {
    dispatch({ type: ORDERS.FETCH.START });
    ordersAPI.fetchAll(
      (response) => { ActionsOrdersFetchAllRequestSuccess(dispatch, response); }
    );
  };
};

function ActionsOrdersFetchByUserIDRequestSuccess(dispatch, response) {
  if (response.success) {
    dispatch({
      type: ORDERS.FETCH_BY_USER_ID.SUCCESS,
      payload: {
        response,
      },
    });
  } else {
    dispatch({
      type: ORDERS.FETCH_BY_USER_ID,
      payload: {
        response,
      },
    });
  }
}

export const ActionsOrdersFetchByUserID = (userID) => {
  return (dispatch) => {
    dispatch({ type: ORDERS.FETCH_BY_USER_ID.START });
    ordersAPI.fetchByUserID(
      userID,
      (response) => { ActionsOrdersFetchByUserIDRequestSuccess(dispatch, response); },
    );
  }
}
