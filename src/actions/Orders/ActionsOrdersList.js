import { ORDERS } from '../types';
import { ordersAPI } from '../../api/Orders';

function ActionsOrdersFetchAllRequestSuccess(dispatch, response) {
  if (response.Success) {
    dispatch({
      type: ORDERS.FETCH.SUCCESS,
      payload: {
        message: response.ErrorContainer.Message,
      },
    });
  } else {
    dispatch({
      type: ORDERS.FETCH.ERROR,
      payload: {
        message: response.ErrorContainer.Message,
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
  if (response.Success) {
    dispatch({
      type: ORDERS.FETCH_BY_USER_ID.SUCCESS,
      payload: {
        message: response.ErrorContainer.Message,
      },
    });
  } else {
    dispatch({
      type: ORDERS.FETCH_BY_USER_ID,
      payload: {
        message: response.ErrorContainer.Message,
      },
    });
  }
}

export const ActionsOrdersFetchByUserID = (userID = 5) => {
  return (dispatch) => {
    dispatch({ type: ORDERS.FETCH_BY_USER_ID.START });
    ordersAPI.fetchByUserID(
      userID,
      (response) => { ActionsOrdersFetchByUserIDRequestSuccess(dispatch, response); },
    );
  }
}
