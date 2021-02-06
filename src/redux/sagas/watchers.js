import { takeEvery } from 'redux-saga/effects';

import {
  SET_NAME,
  SET_QUESTION,
  INCREASE_SCORE,
  LOSE_LIFE,
  LOSE_SKIP,
  END_GAME,
} from '../types';

import {
  nameWorker,
  questionWorker,
  scoreWorker,
  wrongWorker,
  endWorker,
  skipWorker,
} from './workers';

export function* nameWatcher() {
  yield takeEvery(SET_NAME, nameWorker);
}

export function* questionWatcher() {
  yield takeEvery(SET_QUESTION, questionWorker);
}

export function* scoreWatcher() {
  yield takeEvery(INCREASE_SCORE, scoreWorker);
}

export function* wrongWatcher() {
  yield takeEvery(LOSE_LIFE, wrongWorker);
}

export function* endWatcher() {
  yield takeEvery(END_GAME, endWorker);
}

export function* skipWatcher() {
  yield takeEvery(LOSE_SKIP, skipWorker);
}
