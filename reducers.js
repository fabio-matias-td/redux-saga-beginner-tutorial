const defaultState = {
  counter: 0
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
