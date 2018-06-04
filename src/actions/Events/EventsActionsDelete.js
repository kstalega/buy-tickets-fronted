import { EVENT } from '../types';
import { eventAPI } from '../../api/Event';

export const EventActionDeleteTry = (eventID, onSuccess) => {
  return (dispatch) => {
    dispatch({ type: EVENT.DELETE.TRY });
    eventAPI.delete(
      eventID,
      () => {onSuccess();},
      () => {},
    );
  };
};
