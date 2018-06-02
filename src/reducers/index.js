import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EventReducer from './EventReducer';
import OrdersReducer from './OrdersReducer';

export default combineReducers({
  auth: AuthReducer,
  event: EventReducer,
  orders: OrdersReducer,
});
