import { SET_NAME } from '../types';

const initialState = {
  name: localStorage.getItem('playerName') || 'Player',
  score: 0,
  prizePool: 100,
  lives: 3,
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
