import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import PATHS from '../paths'

const { LOGIN } = PATHS.UNAUTHENTICATED

const routes = [{ key: 'LOGIN', path: LOGIN, component: Login }]

const Auth = () => {
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

export default Auth
