// initial state
const initialState = {
  current_freelancer: {}
}

export default function FreelancerReducer(state = initialState, action) {
  switch(action.type) {
    case 'FREELANCER_INFO': {
      return {
        ...state,
        current_freelancer: {
          ...action.payload.allFreelancers.nodes[0]
        }
      }
    }
    default: {
      return state;
    }
  }
}
