import { EVENT } from '../types';
import { eventAPI } from '../../api/Event';

/**
 * Action Events Fetch Single by ID
 */
const getTicketsForEventRequestSuccess = (dispatch, response) => {
  if (response.success) {
    dispatch({
      type: EVENT.FETCH_SINGLE.SUCCESS,
      payload: {
        message: response,
      },
    });
  } else {
    dispatch({
      type: EVENT.FETCH_SINGLE.FAILURE,
      payload: {
        message: response,
      },
    });
  }
};

const getTicketsForEventRequestFailure = (dispatch) => {
  dispatch({
    type: EVENT.FETCH_SINGLE.REQUEST_FAILURE,
  });
};

export const ActionEventsGetTicketsForEvent = (EventID) => {
  return (dispatch) => {
    dispatch({ type: EVENT.FETCH_SINGLE.TRY });
    eventAPI.getTicketsForEvent(
      EventID,
      (response) => { getTicketsForEventRequestSuccess(dispatch, response); },
      () => { getTicketsForEventRequestFailure(dispatch); },
    )
  };
};
