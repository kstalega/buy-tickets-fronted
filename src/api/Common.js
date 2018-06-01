import jQuery from 'jquery';
import { getAuthHeader } from '../services/AuthService';

export const commonAPI = {
  ajax: function ajax(apiEndpoint, apiMethod, authenticationNeeded, onSuccess, onError) {
    const headers =
      authenticationNeeded
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
