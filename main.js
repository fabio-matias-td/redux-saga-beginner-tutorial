import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './components/Counter'
import User from './components/User'
import reducer from './reducers'

import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  let state = store.getState();
  ReactDOM.render(
    <div>
      <Counter
        value={state.counter}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')} />
      <User
        user={state.user}
        loading={state.loading}
        error={state.error}
        login={() => action('FETCH_USER')}
        logout={() => action('LOGOUT')} />
    </div>,
    document.getElementById('root')
  )
}
  
render()
store.subscribe(render)
