const apiEndpoints = {
  user: {
    url: 'https://gateway20180604014740.azurewebsites.net',
    signUp: {
      method: 'post',
      endPoint: '/api/Users',
    },
    getUserInfo: {
      method: 'get',
      endPoint: '/api/Users/',
    }
  },
  events: {
    url: 'https://gateway20180604014740.azurewebsites.net',
    getEvents: {
      method: 'get',
      endPoint: '/events/show',
    },
    addEvent: {
      method: 'post',
      endPoint: '/events/',
      authenticationNeeded: true,
    },
    deleteEvent: {
      method: 'delete',
      endPoint: '/events/',
      authenticationNeeded: true,
    },
    getTicketsForEvent: {
      method: 'get',
      endPoint: '/tickets/event/',
      authenticationNeeded: true,
    },
  },
  orders: {
    url: 'https://gateway20180604014740.azurewebsites.net/orders',
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
