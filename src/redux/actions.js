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
  DOUBLE_PRIZE_POOL,
  LOSE_SKIP,
  RESET_SKIPS,
  END_GAME,
  SHOW_MODAL,
  HIDE_MODAL,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  SET_QUESTIONS,
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

export function doublePrize() {
  return {
    type: DOUBLE_PRIZE_POOL,
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

export function resetSkips() {
  return { type: RESET_SKIPS };
}

export function loseSkip() {
  return { type: LOSE_SKIP };
}

export function endGame() {
  return {
    type: END_GAME,
  };
}

//QUESTIONS

export function fetchQuestions(theme) {
  return { type: FETCH_QUESTIONS, payload: theme };
}

export function setQuestions(questions) {
  return { type: SET_QUESTIONS, payload: questions };
}

// export function fetchQuestions(theme) {
//   return async function (dispatch) {
//     try {
//       dispatch(showLoader());
//       const res = await axios.get(`${url}/themes/${theme}.json`);

//       const payload = Object.values(res.data)[0];

//       dispatch(fetchQAction(payload));
//       dispatch(hideLoader());
//     } catch (e) {
//       dispatch(hideLoader());
//       dispatch(showAlert('Something went wrong =(', true));
//       console.error(e.name + ':' + e.message);
//     }
//   };
// }

export function updateQuestions(newQuestions) {
  return { type: UPDATE_QUESTIONS, payload: newQuestions };
}

export function setQuestion(questions) {
  return function (dispatch) {
    dispatch(showLoader());
    setTimeout(() => {
      const index = Math.floor(Math.random() * questions.length);
      const payload = questions[index];
      dispatch({ type: SET_QUESTION, payload });
      dispatch(hideLoader());
    }, 1000);
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
//Modal
export function showModal() {
  return { type: SHOW_MODAL };
}

export function hideModal() {
  return { type: HIDE_MODAL };
}
//Display

export function showMessage(messageText) {
  return function (dispatch) {
    const payload = messageText;

    dispatch({ type: SHOW_MESSAGE, payload });
    setTimeout(() => {
      dispatch(hideMessage());
    }, 1000);
  };
}

export function hideMessage() {
  return { type: HIDE_MESSAGE };
}
