import { ORDERS } from '../types';
import { ordersAPI } from '../../api/Orders';
import { ActionEventsGetTicketsForEvent } from '../../actions';

/**
 * Action according buying tickets
 */
const buyTicketRequestSuccess = (dispatch, response, eventID) => {
  if (response.success) {
    dispatch({
      type: ORDERS.BUY_TICKET.SUCCESS,
      payload: {
        response,
      },
    });
    // after successfully bought ticket update view
    dispatch(ActionEventsGetTicketsForEvent(eventID));
  } else {
    dispatch({
      type: ORDERS.BUY_TICKET.FAILURE,
      payload: {
        response,
      },
    });
  }
}

export const ActionEventBuyTicket = (userID, ticketID, eventID) => {
  return (dispatch) => {
    dispatch({ type: ORDERS.BUY_TICKET.TRY });
    ordersAPI.buyTicket(
      userID,
      ticketID,
      eventID,
      (response) => { buyTicketRequestSuccess(dispatch, response, eventID) },
      () => {},
    );
  };
};
