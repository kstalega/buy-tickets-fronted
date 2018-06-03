import { ORDERS } from '../../actions/types';

export default (state, action) => {
  switch (action.type) {
    case ORDERS.FETCH_BY_USER_ID.SUCCESS:
      return action.payload.response.result;
    default:
      return state;
  }
};
