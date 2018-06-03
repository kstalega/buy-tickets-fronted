import { ORDERS } from '../actions/types';
import { checkType } from '../misc/misc';
import { 
  OrdersAllOrdersReducer,
  OrdersUserOrdersReducer,
} from './Orders';

const INITIAL_STATE = {
  all_orders: [],
  user_orders: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case checkType(action.type, ORDERS.FETCH):
      return {
        ...state,
        all_orders: OrdersAllOrdersReducer(state.all_orders, action),
      }
    case checkType(action.type, ORDERS.FETCH_BY_USER_ID):
      return {
        ...state,
        user_orders: OrdersUserOrdersReducer(state.user_orders, action)
      }
    default:
      return state;
  }
};
