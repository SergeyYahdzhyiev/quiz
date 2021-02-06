import { all } from 'redux-saga/effects';

import {
  nameWatcher,
  questionWatcher,
  scoreWatcher,
  wrongWatcher,
  endWatcher,
  skipWatcher,
} from './watchers';

export function* rootSaga() {
  yield all([
    nameWatcher(),
    questionWatcher(),
    scoreWatcher(),
    wrongWatcher(),
    endWatcher(),
    skipWatcher(),
  ]);
}
