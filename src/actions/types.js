// all the action types accross application
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_START = 'login_user_start';
export const AUTH_USER_LOGOUT = 'auth_user_logout';
export const SIGN_UP_START = 'sign_up_start';
export const SIGN_UP_FAILURE = 'sign_up_failure';
export const SIGN_UP_SUCCESS = 'sign_up_success';

// actions types connected to the events
export const EVENT = {
  CREATE: {
    TRY: 'event_create_try',
    SUCCESS: 'event_create_success',
    FAILURE: 'event_create_failure',
    REQUEST_FAILURE: 'event_create_request_failure',
  },
  DELETE: {
    TRY: 'event_delete_try',
    SUCCESS: 'event_delete_success',
    FAILURE: 'event_delete_failure',
    REQUEST_FAILURE: 'event_delete_request_failure',
  },
  FETCH_TICKETS_FOR_EVENT: {
    TRY: 'event_fetch_tickets_for_event_try',
    SUCCESS: 'event_fetch_tickets_for_event_success',
    FAILURE: 'event_fetch_tickets_for_event_failure',
    REQUEST_FAILURE: 'event_fetch_tickets_for_event_request_failure',
  },
};

export const ORDERS = {
  FETCH: {
    START: 'orders_fetch_start',
    SUCCESS: 'orders_fetch_success',
    ERROR: 'orders_fetch_error',
  },
  FETCH_BY_USER_ID: {
    START: 'orders_fetch_by_user_id_start',
    SUCCESS: 'orders_fetch_by_user_id_success',
    ERROR: 'orders_fetch_by_user_id_error',
  },
  BUY_TICKET: {
    TRY: 'orders_buy_ticket_try',
    SUCCESS: 'orders_buy_ticket_success',
    FAILURE: 'orders_buy_ticket_failure',
    REQUEST_FAILURE: 'orders_buy_ticket_request_failure',
  },
};
