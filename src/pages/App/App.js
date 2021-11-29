import { Switch, Route, Redirect } from 'react-router-dom'
import { UsersAll, UserCreate, UserProfile, UserProfileEdit } from './Users'
import { RequiredActionsAll, RequiredActionsCreate } from './RequiredActions'
import PATHS from '../paths'
import { LayoutSystemProvider, Layout } from '@qonsoll/react-design'
import { AccountMenu, LayoutAside, Logo, MainMenu } from 'components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'services/firebase'

const {
  USERS_ALL,
  USER_CREATE,
  USER_PROFILE,
  USER_PROFILE_EDIT,
  REQUIRED_ACTIONS_ALL,
  REQUIRED_ACTIONS_CREATE
} = PATHS.AUTHENTICATED

const routes = [
  { key: 'USERS_ALL', path: USERS_ALL, component: UsersAll, exact: true },
  { key: 'USER_CREATE', path: USER_CREATE, component: UserCreate, exact: true },
  {
    key: 'USER_PROFILE',
    path: USER_PROFILE,
    component: UserProfile,
    exact: true
  },
  {
    key: 'USER_PROFILE_EDIT',
    path: USER_PROFILE_EDIT,
    component: UserProfileEdit,
    exact: true
  },
  {
    key: 'REQUIRED_ACTIONS_ALL',
    path: REQUIRED_ACTIONS_ALL,
    component: RequiredActionsAll,
    exact: true
  },
  {
    key: 'REQUIRED_ACTIONS_CREATE',
    path: REQUIRED_ACTIONS_CREATE,
    component: RequiredActionsCreate,
    exact: true
  }
]

const App = () => {
  const [user, loading, error] = useAuthState(auth)
  console.log('user ->', user)
  return (
    // Layout should be here
    <LayoutSystemProvider isAsideLeft>
      <Layout
        asideLeft={
          <LayoutAside
            top={<Logo />}
            center={<MainMenu />}
            bottom={
              <AccountMenu
                avatar={user?.photoURL}
                displayName={user?.displayName}
                email={user?.email}
              />
            }
          />
        }
      >
        <Switch>
          {routes.map((routeProps) => (
            <Route {...routeProps} />
          ))}
          <Route>
            <Redirect to={PATHS.SERVICE.NOT_FOUND} />
          </Route>
        </Switch>
      </Layout>
    </LayoutSystemProvider>
  )
}

export default App
