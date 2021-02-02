import { SET_NAME, SHOW_ALERT, HIDE_ALERT } from './types';

export function showAlert(text, closable) {
  return function (dispatch) {
    if (closable) {
      dispatch({
        type: SHOW_ALERT,
        payload: {
          text,
          closable,
        },
      });
    } else {
      dispatch({
        type: SHOW_ALERT,
        payload: {
          text,
          closable,
        },
      });
      setTimeout(() => {
        dispatch(hideAlert());
      }, 1500);
    }
  };
}

export function hideAlert() {
  return { type: HIDE_ALERT };
}

export function setName(name) {
  return {
    type: SET_NAME,
    payload: name,
  };
}
