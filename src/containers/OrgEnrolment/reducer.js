// initial state
const initialState = {
};




//selectors




// reducer
export default function orgReducer(state = initialState, action) {
  switch(action.type) {
    case 'ORG_SEARCH': {
      return {
        ...state,
        enrolment: {
          ...state.enrolment,
          searching: true,
          searchTerm: action.payload
        }
      }
    }
    case 'ORG_SEARCH_SUCCESS': {
      return {
        ...state,
        enrolment: {
          ...state.enrolment,
          searching: false,
          searched: true,
          found: action.payload ? true : false,
          currentOrg: action.payload ? {
            ...action.payload
          } : null
        },
        lastOrgError: null
      }
    }
    case 'ORG_SEARCH_FAIL': {
      return {  
        ...state,
        enrolment: {
          ...state.enrolment,
          searching: false,
          searched: false,
          found: false
        },
        lastOrgError: action.payload
      }
    }
    case 'ORG_CREATE_SUCCESS': {
      return {
        ...state,
        enrolment: {
          ...state.enrolment,
          created: true,
          currentOrg: action.payload
        },
        userOrg: {
          ...action.payload
        }
      }
    }
    case 'ORG_REQUEST_ACCESS_SUCCESS': {
      return {
        ...state,
        enrolment: {
          ...state.enrolment,
          accessRequested: true
        }
        
      }
    }
    case 'SET_ERRORS': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'RESET_ORG_SEARCH': {
      return {
        ...state,
        enrolment: {
          ...state.enrolment,
          searched: false,
          searching: false,
          searchTerm: null
        }
      }
    }
    default: {
      return state;
    }
  }
}


// enrolment: {
//   searching: false,
//   searched: false,
//   found: false,
//   searchTerm: null,
//   currentOrg: null,
//   lastOrgSearchError: null
// }
