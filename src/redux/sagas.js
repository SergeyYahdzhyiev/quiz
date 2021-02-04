import { takeEvery, all, select } from 'redux-saga/effects';
import { SET_NAME } from './types';

export function* rootSaga() {
  yield all([nameWatcher()]);
}

function* nameWatcher() {
  yield takeEvery(SET_NAME, nameWorker);
}

function* nameWorker() {
  const state = yield select();
  yield localStorage.setItem('playerName', state.game.name);
}
