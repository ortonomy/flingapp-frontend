// initial state
const initialState = {}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}