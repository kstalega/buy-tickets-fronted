import APIsConfig from '../configs/api';
import { commonAPI } from '../api/Common';

export const ordersAPI = {
  fetchAll: function fetchAll(onSuccess, onError) {
    const { fetchAllOrders } = APIsConfig.orders;
    const apiEndpoint = APIsConfig.orders.url + fetchAllOrders.endPoint;
    const { method: apiMethod, authenticationNeeded } = fetchAllOrders;

    commonAPI.ajax(
      apiEndpoint,
      apiMethod,
      {},
      authenticationNeeded,
      onSuccess,
      onError,
    );
  },
  fetchByUserID: function fetchByUserID(userID, onSuccess, onError) {
    const { fetchUserOrders } = APIsConfig.orders;
    const apiEndpoint = APIsConfig.orders.url + fetchUserOrders.endPoint + userID;
    const { method: apiMethod, authenticationNeeded } = fetchUserOrders;

    commonAPI.ajax(
      apiEndpoint,
      apiMethod,
      {},
      authenticationNeeded,
      onSuccess,
      onError,
    );
  },

  buyTicket: function buyTicket(userID, ticketID, eventID, onSuccess, onError) {
    const apiEndpoint = APIsConfig.orders.url + APIsConfig.orders.buyTicket.endPoint
    const apiMethod = APIsConfig.orders.buyTicket.method;
    const authenticationNeeded =  APIsConfig.orders.buyTicket.authenticationNeeded;
    const data = {
      userID,
      'bookings[0].ticketID': ticketID,
      'bookings[0].eventID': eventID,
    };

    commonAPI.ajax(
      apiEndpoint,
      apiMethod,
      data,
      authenticationNeeded,
      onSuccess,
      onError,
    );
  },
};
