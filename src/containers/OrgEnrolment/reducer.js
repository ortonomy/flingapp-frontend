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
          searchTerm: null,
          accessRequested: false,
          currentOrg: null,
          created: false,
          found: false
        }
      }
    }
    case 'VALIDATE_USER_ORG_ACCESS': {
      return {
        ...state,
        validation: {
          ...state.validation,
          validating: true,
          validated: false,
          lastValidationError: null
        }
      }
    }
    case 'VALIDATE_USER_ORG_ACCESS_SUCCESS': {
      return {
        ...state,
        validation: {
          ...state.validation,
          validating: false,
          validated: true,
          lastValidationError: null
        }
      }
    }
    case 'VALIDATE_USER_ORG_ACCESS_FAIL': {
      return {
        ...state,
        validation: {
          ...state.validation,
          validating: false,
          validated: false,
          lastValidationError: action.payload
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
