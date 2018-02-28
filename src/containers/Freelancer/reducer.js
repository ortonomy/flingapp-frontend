// initial state
const initialState = {
  current_freelancer: {}
}

export default function FreelancerReducer(state = initialState, action) {
  switch(action.type) {
    case 'FREELANCER_QUERY': {
      return {
        ...state,
        loading_freelancer: true
      }
    }

    case 'FREELANCER_INFO': {
      return {
        ...state,
        loading_freelancer: false,
        current_freelancer: {
          ...action.payload.node
        }
      }
    }
    default: {
      return state;
    }
  }
}
