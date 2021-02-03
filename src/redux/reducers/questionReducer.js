import { FETCH_QUESTIONS } from '../types';

const initialState = {
  theme: '',
  questions: [],
};

export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}
