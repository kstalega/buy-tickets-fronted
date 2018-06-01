import jQuery from 'jquery';
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
      authenticationNeeded,
      onSuccess,
      onError,
    );
  },
};
