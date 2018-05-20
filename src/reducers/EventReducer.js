import { EVENT } from '../actions/types';
import { EventsCreateReducer } from './Events';

const INITIAL_STATE = {
  create: {
    message: '',
    formInProgress: false,
  },
};

function checkType(type, objectTypes) {
  const actionTypes = Object.values(objectTypes);

  for (let i = 0; i < actionTypes.length; i += 1) {
    if (actionTypes[i] === type) {
      return type;
    }
  }

  return false;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case checkType(action.type, EVENT.CREATE):
      return {
        ...state,
        create: EventsCreateReducer(state.create, action),
      }
    default:
      return state;
  }
};