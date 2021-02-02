import { HIDE_ALERT, SHOW_ALERT, START_CLOSING, END_CLOSING } from '../types';

const initialState = {
  show: false,
  text: 'Default alert text.',
  closable: false,
  closing: false,
};

export function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        show: true,
        text: action.payload.text,
        closable: action.payload.closable,
      };
    case HIDE_ALERT:
      return {
        ...state,
        show: false,
      };
    case START_CLOSING:
      return {
        ...state,
        closing: true,
      };
    case END_CLOSING:
      return {
        ...state,
        closing: false,
      };
    default:
      return state;
  }
}
