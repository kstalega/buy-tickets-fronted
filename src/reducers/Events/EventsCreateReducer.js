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
        message: 'We cannot create event, probably form was wrongly filled.',
      };
    case EVENT.CREATE.REQUEST_FAILURE:
      return {
        ...state,
        formInProgress: false,
        message: 'We cannot create event, probably form was wrongly filled.',
      };
    case EVENT.CREATE.SUCCESS:
      return {
        ...state,
        formInProgress: false,
        message: 'Event created successfully',
      };
    default:
      return state;
  }
};