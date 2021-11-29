import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from 'react-router-dom'
import StudentsAll from './pages/StudentsAll'
import RequiredActionsAll from './pages/RequiredActionsAll'
import Error from './pages/Error'
import UserCreate from './pages/UserCreate'
import RequiredActionsCreate from './pages/RequiredActionsCreate'
function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/users">Students</Link>
              </li>
              <li>
                <Link to="/required-actions">Required Actions</Link>
              </li>
              <li>
                <Link to="/user/create">Create User</Link>
              </li>
              <li>
                <Link to="/required-action/create">Create Required Action</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users" element={<StudentsAll />} />
            <Route path="/required-actions" element={<RequiredActionsAll />} />
            <Route path="/user/create" element={<UserCreate />} />
            <Route
              path="/required-action/create"
              element={<RequiredActionsCreate />}
            />
            <Route path="/" element={<Error />} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
