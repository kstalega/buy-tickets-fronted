import jQuery from 'jquery';
import APIsConfig from '../configs/api';

export function signUpUser(userData, onSuccess, onError) {
  const apiEndpoint = APIsConfig.user.url + APIsConfig.user.signUp.endPoint;
  const apiMethod = APIsConfig.user.signUp.method;

  jQuery.ajax({
    type: apiMethod,
    url: apiEndpoint,
    data: {
      email: userData.login,
      name: 'Marcin',
      surname: 'Kowalski',
      phoneNumber: 888999000,
      hashPassword: userData.password,
      userAccountStatus: 'normal',
      accountStatusChangeDate: '2018-05-08T20:15:35.350Z',
      salt: 'string',
      authToken: 'string',
      authTokenExpiration: '2018-05-08T20:15:35.350Z',
      permissionId: 0,
    },
    dataType: 'json',
    success: onSuccess,
    error: onError,
  });
}

export function signInUser(userData, onSuccess) {

};