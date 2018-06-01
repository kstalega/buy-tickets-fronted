import jQuery from 'jquery';
import APIsConfig from '../configs/api';
import { getAuthHeader } from '../services/AuthService';

export const ordersAPI = {
  fetch: function fetch(onSuccess, onError) {
    const apiEndpoint = APIsConfig.orders.url + APIsConfig.orders.fetchOrders.endPoint;
    const apiMethod = APIsConfig.orders.fetchOrders.method;
    const headers =
      APIsConfig.orders.fetchOrders.authenticationNeeded
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
