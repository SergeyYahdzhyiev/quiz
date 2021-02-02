import {
  SET_NAME,
  SHOW_ALERT,
  HIDE_ALERT,
  START_CLOSING,
  END_CLOSING,
} from './types';

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
  return function (dispatch) {
    dispatch(startClosing());
    setTimeout(() => {
      dispatch(endClosing());
      dispatch({ type: HIDE_ALERT });
    }, 100);
  };
}

export function setName(name) {
  return {
    type: SET_NAME,
    payload: name,
  };
}

function startClosing() {
  return { type: START_CLOSING };
}

function endClosing() {
  return { type: END_CLOSING };
}
