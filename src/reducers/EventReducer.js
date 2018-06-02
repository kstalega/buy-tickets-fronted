import { EVENT } from '../actions/types';
import { EventsCreateReducer, EventsGetTicketsForEventReducer } from './Events';
import { checkType } from '../misc/misc';

const INITIAL_STATE = {
  create: {
    message: '',
    formInProgress: false,
  },
  singleEvent: {
    ticketList: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case checkType(action.type, EVENT.CREATE):
      return {
        ...state,
        create: EventsCreateReducer(state.create, action),
      };
    case checkType(action.type, EVENT.FETCH_TICKETS_FOR_EVENT):
      return {
        ...state,
        singleEvent: EventsGetTicketsForEventReducer(state.singleEvent, action),
      };
    default:
      return state;
  }
};
