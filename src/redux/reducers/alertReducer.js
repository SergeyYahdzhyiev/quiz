import { HIDE_ALERT, SHOW_ALERT } from '../types';

const initialState = {
  show: false,
  text: 'Default alert text.',
  closable: false,
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
    default:
      return state;
  }
}
