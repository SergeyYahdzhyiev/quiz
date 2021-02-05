import { takeEvery, all, select, put } from 'redux-saga/effects';
import { doublePrize, setQuestion, updateQuestions } from './actions';
import { INCREASE_SCORE, LOSE_LIFE, SET_NAME, SET_QUESTION } from './types';

export function* rootSaga() {
  yield all([nameWatcher(), questionWatcher(), scoreWatcher(), wrongWatcher()]);
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
  yield put(updateQuestions(payload));
}

function* scoreWatcher() {
  yield takeEvery(INCREASE_SCORE, scoreWorker);
}

function* scoreWorker() {
  const state = yield select();
  const questions = yield state.questions.questions;
  yield put(doublePrize());
  yield put(setQuestion(questions));
}

function* wrongWatcher() {
  yield takeEvery(LOSE_LIFE, wrongWorker);
}

function* wrongWorker() {
  const state = yield select();
  const questions = yield state.questions.questions;
  yield put(setQuestion(questions));
}
