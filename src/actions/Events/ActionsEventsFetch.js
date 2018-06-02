import { EVENT } from '../types';
import { eventAPI } from '../../api/Event';

/**
 * Action Events Fetch Single by ID
 */
const EventFetchSingleRequestSuccess = (dispatch, response) => {
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

const EventFetchSingleRequestFailure = (dispatch) => {
  dispatch({
    type: EVENT.FETCH_SINGLE.REQUEST_FAILURE,
  });
};

export const ActionEventsFetchSingle = (EventID) => {
  return (dispatch) => {
    dispatch({ type: EVENT.FETCH_SINGLE.TRY });
    eventAPI.fetchSingle(
      EventID,
      (response) => { EventFetchSingleRequestSuccess(dispatch, response); },
      () => { EventFetchSingleRequestFailure(dispatch); },
    )
  };
};
