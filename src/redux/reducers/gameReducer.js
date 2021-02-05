import {
  RESET_LIVES,
  RESET_PRIZE_POOL,
  RESET_SCORE,
  SET_NAME,
  INCREASE_SCORE,
  LOSE_LIFE,
  DOUBLE_PRIZE_POOL,
} from '../types';

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
    case RESET_LIVES:
      return { ...state, lives: 3 };
    case RESET_PRIZE_POOL:
      return { ...state, prizePool: 100 };
    case DOUBLE_PRIZE_POOL:
      return { ...state, prizePool: state.prizePool * 2 };
    case RESET_SCORE:
      return { ...state, score: 0 };
    case INCREASE_SCORE:
      return { ...state, score: state.score + state.prizePool };
    case LOSE_LIFE:
      return { ...state, lives: state.lives - 1 };
    default:
      return state;
  }
}
