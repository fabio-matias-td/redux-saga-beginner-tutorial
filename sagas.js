import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import { userUrl } from './constants';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

// async increment task
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' })
}

// user fetch task
export function* fetchUser() {
  try {
    const data = yield call(fetch, userUrl)
    const user = yield data.json();
    yield put({ type: 'FETCH_USER_SUCCESS', user })
  } catch(error) {
    yield put({ type: 'FETCH_USER_ERROR', error })
  }
}

// sagas
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchSaga() {
  yield takeLatest('FETCH_USER', fetchUser)
}

// root saga
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    fetchSaga()
  ])
}