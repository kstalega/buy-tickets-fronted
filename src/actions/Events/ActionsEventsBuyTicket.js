import { ORDERS } from '../types';
import { ordersAPI } from '../../api/Orders';

export const ActionEventBuyTicket = (userID, ticketID, eventID) => {
  return (dispatch) => {
    dispatch({ type: ORDERS.BUY_TICKET.TRY });
    ordersAPI.buyTicket(
      userID,
      ticketID,
      eventID,
      () => {},
      () => {},
    );
  };
};
