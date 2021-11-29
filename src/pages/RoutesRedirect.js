import { useEffect } from 'react'
import { auth } from 'services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory, useLocation } from 'react-router-dom'
import { useHandleError } from 'hooks'
import { Box, Text } from '@qonsoll/react-design'
import PATHS from './paths'
// import { useUser } from 'domains/User/context' // uncomment this part if you want to use this hook

const unauthenticatedPaths = Object.values(PATHS.UNAUTHENTICATED)

const RoutesRedirect = ({ children }) => {
  const history = useHistory()
  const location = useLocation()
  const handleError = useHandleError()
  const [user, loading, error] = useAuthState(auth)
  // const user = useUser() // uncomment this part if you need to add extra conditions based on data from the DB

  // Making decision how to redirect
  useEffect(() => {
    const isUnauthenticatedPath = unauthenticatedPaths.includes(
      location.pathname
    )

    // Conditions
    const isLoggedIn = isUnauthenticatedPath && user && !loading
    const isLoggedOut = !isUnauthenticatedPath && !user && !loading

    // Decisions
    isLoggedIn && history.push(PATHS.CONFIG.AFTER_LOGIN)
    isLoggedOut && history.push(PATHS.CONFIG.AFTER_LOGOUT)
  }, [history, user, loading, location.pathname])

  // Session fetching error handling
  useEffect(() => {
    error && handleError(error)
  }, [error, handleError])

  return (
    <>
      {loading ? (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center">
            <Text type="secondary" pb="2">
              Loading...
            </Text>
          </Box>
        </Box>
      ) : (
        children
      )}
    </>
  )
}

export default RoutesRedirect
