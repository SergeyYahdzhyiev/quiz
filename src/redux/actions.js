import axios from 'axios';
import {
  SET_NAME,
  SHOW_ALERT,
  HIDE_ALERT,
  FETCH_QUESTIONS,
  FETCH_THEMES,
  SHOW_LOADER,
  HIDE_LOADER,
  SET_THEME,
  RESET_LIVES,
  RESET_PRIZE_POOL,
  RESET_SCORE,
  INCREASE_SCORE,
  LOSE_LIFE,
  UPDATE_QUESTIONS,
  SET_QUESTION,
} from './types';

const url = process.env.REACT_APP_DB_URL;

//GAME
export function setName(name) {
  return {
    type: SET_NAME,
    payload: name,
  };
}

export function resetLives() {
  return {
    type: RESET_LIVES,
  };
}

export function resetPrizePool() {
  return {
    type: RESET_PRIZE_POOL,
  };
}

export function resetScore() {
  return { type: RESET_SCORE };
}

export function increaseScore() {
  return { type: INCREASE_SCORE };
}

export function loseLife() {
  return { type: LOSE_LIFE };
}

//QUESTIONS
export function fetchQuestions(theme) {
  return async function (dispatch) {
    try {
      dispatch(showLoader());
      const res = await axios.get(`${url}/themes/${theme}.json`);

      const payload = Object.values(res.data)[0];

      dispatch({ type: FETCH_QUESTIONS, payload });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(hideLoader());
      dispatch(showAlert('Something went wrong =(', true));
      console.error(e.name + ':' + e.message);
    }
  };
}

export function updateQuestions(newQuestions) {
  return { type: UPDATE_QUESTIONS, payload: newQuestions };
}

export function setQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  const payload = questions[index];
  return {
    type: SET_QUESTION,
    payload,
  };
}

export function fetchThemes() {
  return async function (dispatch) {
    try {
      dispatch(showLoader());
      const res = await axios.get(`${url}/themes.json`);
      const payload = Object.keys(res.data);

      dispatch({ type: FETCH_THEMES, payload });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(hideLoader());
      dispatch(showAlert('Something went wrong =(', true));
      console.error(e.name + ':' + e.message);
    }
  };
}

export function setTheme(name) {
  return {
    type: SET_THEME,
    payload: name,
  };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

//ALERT
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
