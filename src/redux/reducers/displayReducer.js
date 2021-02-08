import { SHOW_MESSAGE, HIDE_MESSAGE } from '../types';

const initialState = {
  message: '',
};

export function displayReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, message: action.payload };
    case HIDE_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
}
