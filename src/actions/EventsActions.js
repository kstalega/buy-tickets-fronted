import {
  EVENT_ADD,
} from './types';
import { eventAPI } from '../api/Event';

export const tryToCreateEventAction = (eventData) => {
  return (dispatch) => {
    eventAPI.add(
      eventData,
      () => { console.log('success'); },
      () => { console.log('failure'); },
    );
  };
};

export const tryToDeleteEventAction = () => {
  console.log('delete attempt');
}