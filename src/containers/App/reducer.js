// initial state
const initialState = {}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'APP_UPDATE_SUCCESS': {
      return {
        ...state,
        default: action.payload,
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