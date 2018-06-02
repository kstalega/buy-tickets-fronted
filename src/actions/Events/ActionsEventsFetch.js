import { EVENT } from '../types';
import { eventAPI } from '../../api/Event';

/**
 * Action Events Fetch Single by ID
 */
const getTicketsForEventRequestSuccess = (dispatch, response) => {
  if (response.success) {
    dispatch({
      type: EVENT.FETCH_TICKETS_FOR_EVENT.SUCCESS,
      payload: {
        message: response,
      },
    });
  } else {
    dispatch({
      type: EVENT.FETCH_TICKETS_FOR_EVENT.FAILURE,
      payload: {
        message: response,
      },
    });
  }
};

const getTicketsForEventRequestFailure = (dispatch) => {
  dispatch({
    type: EVENT.FETCH_TICKETS_FOR_EVENT.REQUEST_FAILURE,
  });
};

export const ActionEventsGetTicketsForEvent = (EventID) => {
  return (dispatch) => {
    dispatch({ type: EVENT.FETCH_TICKETS_FOR_EVENT.TRY });
    eventAPI.getTicketsForEvent(
      EventID,
      (response) => { getTicketsForEventRequestSuccess(dispatch, response); },
      () => { getTicketsForEventRequestFailure(dispatch); },
    )
  };
};
