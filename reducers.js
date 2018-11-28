const defaultState = {
  counter: 0,
  loading: false,
  user: null,
  error: null
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }

    case 'FETCH_USER':
      return { ...state, loading: true }
    case 'FETCH_USER_SUCCESS':
      return { ...state, loading: false, user: action.user, error: null }
    case 'FETCH_USER_ERROR':
      return { ...state, loading: false, user: null, error: action.error }
    case 'LOGOUT':
      return { ...state, loading: false, user: null, error: null }

    default:
      return state
  }
}
