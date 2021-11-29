const PATHS = {
  CONFIG: {
    DEFAULT: '/auth',
    AFTER_LOGIN: '/users',
    AFTER_LOGOUT: '/auth',
    AFTER_SIGNUP: '/users'
  },
  UNAUTHENTICATED: {
    LOGIN: '/auth'
  },
  SERVICE: {
    NOT_FOUND: '/service/404'
  },
  AUTHENTICATED: {
    USERS_ALL: '/users',
    USER_CREATE: '/user/create',
    USER_PROFILE: '/users/:id',
    USER_PROFILE_EDIT: '/users/:id/edit',
    REQUIRED_ACTIONS_ALL: '/required-actions',
    REQUIRED_ACTIONS_CREATE: '/required-action/create',
    GROUPS_ALL: '/groups',
    GROUP_CREATE: '/group/create',
    GROUP_EDIT: '/groups/:id/edit'
  }
}

export default PATHS
