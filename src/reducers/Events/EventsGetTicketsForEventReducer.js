import { EVENT } from '../../actions/types';

export default (state, action) => {
  switch (action.type) {
    case EVENT.FETCH_TICKETS_FOR_EVENT.SUCCESS:
      return {
        ...state,
        ticketList: action.payload.message.result,
      };
    default:
      return state;
  }
};
