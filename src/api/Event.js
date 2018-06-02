import jQuery from 'jquery';
import APIsConfig from '../configs/api';
import { commonAPI } from '../api/Common';

export const eventAPI = {
  add: function add(eventData, onSuccess, onError) {
    const apiEndpoint = APIsConfig.events.url + APIsConfig.events.addEvent.endPoint;
    const apiMethod = APIsConfig.events.addEvent.method;

    jQuery.ajax({
      type: apiMethod,
      url: apiEndpoint,
      data: eventData,
      dataType: 'json',
      success: onSuccess,
      error: onError,
    });
  },

  delete: function deleteEvent(eventID, onSuccess, onError) {
    const apiEndpoint = APIsConfig.events.url + APIsConfig.events.deleteEvent.endPoint + eventID;
    const apiMethod = APIsConfig.events.deleteEvent.method;

    jQuery.ajax({
      type: apiMethod,
      url: apiEndpoint,
      dataType: 'json',
      success: onSuccess,
      error: onError,
    });
  },

  fetchSingle: function fetchSingle(eventID, onSuccess, onError) {
    const apiEndpoint = APIsConfig.events.url + APIsConfig.events.fetchSingle.endPoint + eventID;
    const apiMethod = APIsConfig.events.fetchSingle.method;
    const authenticationNeeded = APIsConfig.events.fetchSingle.authenticationNeeded;

    commonAPI.ajax(
      apiEndpoint,
      apiMethod,
      authenticationNeeded,
      onSuccess,
      onError,
    );
  },
};
