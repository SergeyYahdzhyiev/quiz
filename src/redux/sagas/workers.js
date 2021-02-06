import { select, put } from 'redux-saga/effects';

import {
  updateQuestions,
  doublePrize,
  setQuestion,
  resetLives,
  resetPrizePool,
  resetSkips,
} from '../actions';

export function* nameWorker() {
  const state = yield select();
  yield localStorage.setItem('playerName', state.game.name);
}

export function* questionWorker() {
  const state = yield select();
  const question = yield state.questions.question;
  const questions = yield state.questions.questions;
  const payload = yield questions.filter(
    (q) => q.question !== question.question
  );
  yield put(updateQuestions(payload));
}

export function* scoreWorker() {
  const state = yield select();
  const questions = yield state.questions.questions;
  yield put(doublePrize());
  yield put(setQuestion(questions));
}

export function* wrongWorker() {
  const state = yield select();
  const questions = yield state.questions.questions;
  yield put(setQuestion(questions));
}

export function* endWorker() {
  yield put(resetLives());
  yield put(resetPrizePool());
  yield put(resetSkips());
}

export function* skipWorker() {
  const state = yield select();
  const questions = yield state.questions.questions;
  yield put(setQuestion(questions));
}
