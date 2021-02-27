import {
  SET_QUESTIONS,
  SET_THEME,
  SET_QUESTION,
  FETCH_THEMES,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_QUESTIONS,
} from '../types';

const initialState = {
  themes: [],
  theme: localStorage.getItem('quizTheme') || 'test',
  questions: [],
  question: {},
  loading: false,
};

export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case UPDATE_QUESTIONS:
      return { ...state, questions: action.payload };
    case FETCH_THEMES:
      return { ...state, themes: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_QUESTION:
      return { ...state, question: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
