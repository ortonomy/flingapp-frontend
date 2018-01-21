import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

const UserIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/landing',
  authenticatedSelector: state => {
    console.log(state.App.user)
    return state.App.user === undefined
  },
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default UserIsAuthenticated
