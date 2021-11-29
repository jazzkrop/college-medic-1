import { Switch, Route, Redirect } from 'react-router-dom'
import { UsersAll, UserCreate, UserProfile, UserProfileEdit } from './Users'
import { RequiredActionsAll, RequiredActionsCreate } from './RequiredActions'
import PATHS from '../paths'

const {
  USERS_ALL,
  USER_CREATE,
  USER_PROFILE,
  USER_PROFILE_EDIT,
  REQUIRED_ACTIONS_ALL,
  REQUIRED_ACTIONS_CREATE
} = PATHS.AUTHENTICATED

const routes = [
  { key: 'USERS_ALL', path: USERS_ALL, component: UsersAll },
  { key: 'USER_CREATE', path: USER_CREATE, component: UserCreate },
  { key: 'USER_PROFILE', path: USER_PROFILE, component: UserProfile },
  {
    key: 'USER_PROFILE_EDIT',
    path: USER_PROFILE_EDIT,
    component: UserProfileEdit
  },
  {
    key: 'REQUIRED_ACTIONS_ALL',
    path: REQUIRED_ACTIONS_ALL,
    component: RequiredActionsAll
  },
  {
    key: 'REQUIRED_ACTIONS_CREATE',
    path: REQUIRED_ACTIONS_CREATE,
    component: RequiredActionsCreate
  }
]

const App = () => {
  return (
    // Layout should be here
    <Switch>
      {routes.map((routeProps) => (
        <Route {...routeProps} />
      ))}
      <Route>
        <Redirect to={PATHS.SERVICE.NOT_FOUND} />
      </Route>
    </Switch>
  )
}

export default App
