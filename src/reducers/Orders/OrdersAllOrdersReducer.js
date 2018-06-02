import { ORDERS } from '../../actions/types';

export default (state, action) => {
  switch (action.type) {
    case ORDERS.FETCH.SUCCESS:
      return action.payload.response.result;
    default:
      return state;
  }
};
