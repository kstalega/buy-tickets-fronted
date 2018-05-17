const apiEndpoints = {
  user: {
    url: 'http://usersrestmicroservice.azurewebsites.net',
    signUp: {
      method: 'post',
      endPoint: '/api/Users',
    },
  },
  events: {
    url: 'http://et-microservice.westeurope.cloudapp.azure.com:8181',
    getEvents: {
      method: 'get',
      endPoint: '/events/show',
    },
  },
};

export default apiEndpoints;
