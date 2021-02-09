import { all } from 'redux-saga/effects';

import {
  nameWatcher,
  questionWatcher,
  scoreWatcher,
  wrongWatcher,
  endWatcher,
  skipWatcher,
  themeWatcher,
} from './watchers';

export function* rootSaga() {
  yield all([
    nameWatcher(),
    themeWatcher(),
    questionWatcher(),
    scoreWatcher(),
    wrongWatcher(),
    endWatcher(),
    skipWatcher(),
  ]);
}
