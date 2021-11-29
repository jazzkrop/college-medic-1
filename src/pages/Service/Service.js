import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './NotFound'
import PATHS from '../paths'

const { NOT_FOUND } = PATHS.SERVICE

const routes = [
  { key: 'NOT_FOUND', path: NOT_FOUND, component: NotFound, exact: true }
]

const Service = () => {
  return (
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

export default Service
