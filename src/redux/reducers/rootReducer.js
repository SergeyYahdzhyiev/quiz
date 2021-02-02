import { combineReducers } from 'redux';

import { gameReducer } from './gameReducer';
import { questionReducer } from './questionReducer';

export const rootReducer = combineReducers({
  game: gameReducer,
  questions: questionReducer,
});
