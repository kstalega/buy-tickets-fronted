import jQuery from 'jquery';
import APIsConfig from '../configs/api';

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
};

