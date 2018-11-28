/*eslint-disable no-unused-vars */
import React from 'react'

export default function Counter({ value, onIncrement, onDecrement, onIncrementAsync }) {
  return (
    <div>
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}