import jQuery from 'jquery';
import APIsConfig from '../configs/api';
import { getAuthHeader } from '../services/AuthService';

export const ordersAPI = {
  fetchAll: function fetchAll(onSuccess, onError) {
    const apiEndpoint = APIsConfig.orders.url + APIsConfig.orders.fetchAllOrders.endPoint;
    const apiMethod = APIsConfig.orders.fetchAllOrders.method;
    const headers =
      APIsConfig.orders.fetchAllOrders.authenticationNeeded
        ? getAuthHeader()
        : {};

    jQuery.ajax({
      type: apiMethod,
      url: apiEndpoint,
      dataType: 'json',
      success: onSuccess,
      error: onError,
      headers,
    });
  },
  fetchByUserID: function fetchByUserID(userID, onSuccess, onError) {
    const apiEndpoint = APIsConfig.orders.url + APIsConfig.orders.fetchUserOrders.endPoint + userID;
    const apiMethod = APIsConfig.orders.fetchUserOrders.method;
    const headers =
      APIsConfig.orders.fetchAllOrders.authenticationNeeded
        ? getAuthHeader()
        : {};

    jQuery.ajax({
      type: apiMethod,
      url: apiEndpoint,
      dataType: 'json',
      success: onSuccess,
      error: onError,
      headers,
    });
  },
};
