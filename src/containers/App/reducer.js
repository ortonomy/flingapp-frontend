// initial state
const initialState = {
  global: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'APP_UPDATE_SUCCESS': {
      return {
        ...state,
        global: action.payload,
      };
    }
    case 'APP_RESET_STATE': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}