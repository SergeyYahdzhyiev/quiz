import { SET_NAME, SHOW_ALERT, HIDE_ALERT } from './types';

export function showAlert(text, closable) {
  return {
    type: SHOW_ALERT,
    payload: { text, closable },
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function setName(name) {
  return {
    type: SET_NAME,
    payload: name,
  };
}
