import { Switch, Route, Redirect } from 'react-router-dom'
import { UsersAll, UserCreate, UserProfile, UserProfileEdit } from './Users'
import { GroupsAll, GroupCreate, GroupEdit } from './Groups'
import {
  RequiredActionsAll,
  RequiredActionsCreate,
  RequiredAction,
  RequiredActionsEdit
} from './RequiredActions'
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
  REQUIRED_ACTIONS_CREATE,
  REQUIRED_ACTION,
  REQUIRED_ACTION_EDIT,
  GROUPS_ALL,
  GROUP_CREATE,
  GROUP_EDIT
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
    key: 'REQUIRED_ACTION',
    path: REQUIRED_ACTION,
    component: RequiredAction,
    exact: true
  },
  {
    key: 'REQUIRED_ACTION_EDIT',
    path: REQUIRED_ACTION_EDIT,
    component: RequiredActionsEdit,
    exact: true
  },
  {
    key: 'REQUIRED_ACTIONS_CREATE',
    path: REQUIRED_ACTIONS_CREATE,
    component: RequiredActionsCreate,
    exact: true
  },
  {
    key: 'GROUPS_ALL',
    path: GROUPS_ALL,
    component: GroupsAll,
    exact: true
  },
  {
    key: 'GROUP_CREATE',
    path: GROUP_CREATE,
    component: GroupCreate,
    exact: true
  },
  {
    key: 'GROUP_EDIT',
    path: GROUP_EDIT,
    component: GroupEdit,
    exact: true
  }
]

const App = () => {
  const [user, loading, error] = useAuthState(auth)
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
