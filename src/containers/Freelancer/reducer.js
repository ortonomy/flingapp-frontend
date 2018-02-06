// initial state
const initialState = {
}

export default function FreelancerReducer(state = initialState, action) {
  switch(action.type) {
    case 'FREELANCER': {
      return {
        ...state,
        freelancer: ''
      }
    }
    default: {
      return state;
    }
  }
}
