import { EVENT } from '../types';

export const EventActionDeleteTry = () => {
  return (dispatch) => {
    dispatch({ type: EVENT.DELETE.TRY });
    console.log('delete attempt');
  };
};