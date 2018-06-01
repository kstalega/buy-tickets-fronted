import { ORDERS } from '../types';
import { ordersAPI } from '../../api/Orders';

function ActionsOrdersFetchRequestSuccess(dispatch, response) {
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

export const ActionsOrdersFetch = () => {
  return (dispatch) => {
    dispatch({ type: ORDERS.FETCH.START });
    ordersAPI.fetch(
      (response) => { ActionsOrdersFetchRequestSuccess(dispatch, response) }
    );
  };
};
