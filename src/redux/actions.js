import axios from 'axios';
import { SET_NAME, SHOW_ALERT, HIDE_ALERT, FETCH_QUESTIONS } from './types';

const url = process.env.REACT_APP_DB_URL;

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
      }, 2000);
    }
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

export function fetchQuestions(theme) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/themes/${theme}.json`);

      const payload = Object.values(res.data)[0];

      dispatch({ type: FETCH_QUESTIONS, payload });
    } catch (e) {
      console.error(e.name + ':' + e.message);
    }
  };
}
