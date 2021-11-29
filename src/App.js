import Navigator from './pages/Navigator'

function App() {
  return (
    <div>
      {/* <Router>
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
          <Switch>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<StudentsAll />} />
            <Route path="/required-actions" element={<RequiredActionsAll />} />
            <Route path="/user/create" element={<UserCreate />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route
              path="/required-action/create"
              element={<RequiredActionsCreate />}
            />
            <Route element={<Error />} />
          </Switch>
        </div>
      </Router> */}
      <Navigator />
    </div>
  )
}

export default App
