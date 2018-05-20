import { EVENT } from '../../actions/types';

const INITIAL_STATE = {
  message: '',
  formInProgress: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT.CREATE.TRY:
      return {
        ...state,
        formInProgress: true,
      };
    case EVENT.CREATE.FAILURE:
      return {
        ...state,
        formInProgress: false,
      };
    case EVENT.CREATE.REQUEST_FAILURE:
      return {
        ...state,
        formInProgress: false,
      };
    case EVENT.CREATE.SUCCESS:
      return {
        ...state,
        formInProgress: false,
      };
    default:
      return state;
  }
};