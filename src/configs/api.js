const apiEndpoints = {
  user: {
    url: 'http:/usersmicroservice.azurewebsites.net',
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
    addEvent: {
      method: 'post',
      endPoint: '/events/',
    },
    deleteEvent: {
      method: 'delete',
      endPoint: '/events/',
    },
    getTicketsForEvent: {
      method: 'get',
      endPoint: '/tickets/event/',
      authenticationNeeded: true,
    },
  },
  orders: {
    url: 'http://rso-mf.westeurope.cloudapp.azure.com:8181/orders',
    fetchAllOrders: {
      method: 'get',
      endPoint: '/all_orders',
      authenticationNeeded: true,
    },
    fetchUserOrders: {
      method: 'get',
      endPoint: '/user/',
      authenticationNeeded: true,
    },
    buyTicket: {
      method: 'post',
      endPoint: '/new_order',
      authenticationNeeded: true,
    }
  },
};

export default apiEndpoints;
