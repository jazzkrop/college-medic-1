import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import PATHS from '../paths'
import {
  LayoutSystemProvider,
  Layout,
  Footer,
  Header
} from '@qonsoll/react-design'

const { LOGIN } = PATHS.UNAUTHENTICATED

const routes = [{ key: 'LOGIN', path: LOGIN, component: Login }]

const Auth = () => {
  return (
    <LayoutSystemProvider>
      <Layout
        footer={
          <Footer alignItems="center" justifyContent="center" bg="#f2f2f2">
            2021
          </Footer>
        }
        header={
          <Header
            alignItems="center"
            bg="#6648bf"
            color="#fff"
            height={64}
            justifyContent="center"
          >
            Medics
          </Header>
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

export default Auth
