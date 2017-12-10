import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

const UserIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.user.data !== null,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default UserIsAuthenticated
