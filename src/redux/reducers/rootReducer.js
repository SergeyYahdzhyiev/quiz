import { combineReducers } from 'redux';

import { alertReducer } from './alertReducer';
import { gameReducer } from './gameReducer';
import { questionReducer } from './questionReducer';

export const rootReducer = combineReducers({
  game: gameReducer,
  questions: questionReducer,
  alert: alertReducer,
});
