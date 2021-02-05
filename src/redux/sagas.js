import { takeEvery, all, select, put } from 'redux-saga/effects';
import { updateQuestions } from './actions';
import { SET_NAME, SET_QUESTION } from './types';

export function* rootSaga() {
  yield all([nameWatcher(), questionWatcher()]);
}

function* nameWatcher() {
  yield takeEvery(SET_NAME, nameWorker);
}

function* nameWorker() {
  const state = yield select();
  yield localStorage.setItem('playerName', state.game.name);
}

function* questionWatcher() {
  yield takeEvery(SET_QUESTION, questionWorker);
}

function* questionWorker() {
  const state = yield select();
  const question = yield state.questions.question;
  const questions = yield state.questions.questions;
  const payload = yield questions.filter(
    (q) => q.question !== question.question
  );
  yield console.log(payload);
  yield put(updateQuestions(payload));
}
