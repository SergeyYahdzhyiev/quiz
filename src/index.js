import './styles/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { App } from './App';
import { rootReducer } from './redux/reducers';
import { rootSaga } from './redux/sagas/root';

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSaga);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
