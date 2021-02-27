import { all } from 'redux-saga/effects';

import {
  nameWatcher,
  questionWatcher,
  scoreWatcher,
  wrongWatcher,
  endWatcher,
  skipWatcher,
  themeWatcher,
  fetchWatcher,
} from './watchers';

export function* rootSaga() {
  yield all([
    fetchWatcher(),
    nameWatcher(),
    themeWatcher(),
    questionWatcher(),
    scoreWatcher(),
    wrongWatcher(),
    endWatcher(),
    skipWatcher(),
  ]);
}
