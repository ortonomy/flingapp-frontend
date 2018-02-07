// initial state
const initialState = {
}

export default function loginReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN': {
      return {
        ...state,
        loggingIn: true,
        loggedIn: false
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        jwt: action.payload,
        loggingIn: false,
        loggedIn: true,
        lastLoginError: null
      }
    }
    case 'LOGIN_FAIL': {
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        lastLoginError: action.payload
      }
    }
    case 'REGISTER': {
      return {
        ...state,
        registering: true
      }
    }
    case 'REGISTER_SUCCESS': {
      return {
        ...state,
        registering: false
      }
    }
    case 'REGISTER_FAIL': {
      return {
        ...state,
        registering: false,
        lastRegisterError: action.payload
      }
    }
    case 'ACTIVATE': {
      return {
        ...state,
        activating: true
      }
    }
    case 'ACTIVATE_SUCCESS': {
      return {
        ...state,
        activating: false,
        activated: true,
        jwt: action.payload
      }
    }
    case 'ACTIVATE_FAIL': {
      return {
        ...state,
        activating: false,
        lastActivationError: action.payload
      }
    }
    case 'THIS_USER_UPDATE': {
      return {
        ...state,
        findingUser: true
      }
    }
    case 'THIS_USER_UPDATE_SUCCESS': {
      return {
        ...state,
        findingUser: false,
        activated: action.payload.userEmailConfirmed,
        user: {
          ...action.payload
        }
      }
    }
    case 'THIS_USER_UPDATE_FAIL': {
      return {
        ...state,
        findingUser: false,
        lastUserError: action.payload
      }
    }
    case 'SET_ERRORS': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        loggedIn: false
      }
    }
    default: {
      return state;
    }
  }
}