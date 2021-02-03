import {
  FETCH_QUESTIONS,
  SET_THEME,
  SET_QUESTION,
  UPDATE_QUESTIONS,
} from '../types';

const initialState = {
  theme: '',
  questions: [],
  question: {},
};

export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case UPDATE_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_QUESTION:
      return { ...state, question: action.payload };
    default:
      return state;
  }
}
