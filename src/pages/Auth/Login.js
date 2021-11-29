import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from '@firebase/firestore'
import { useHistory } from 'react-router-dom'
import { app } from 'services/firebase'
import { PageWrapper, Button } from '@qonsoll/react-design'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

const Login = (props) => {
  const history = useHistory()

  const login = async () => {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    const userRef = doc(db, 'users', user.uid)
    const userSnapshot = await getDoc(userRef)
    if (!userSnapshot.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        displayName: user.displayName || null,
        avatarUrl: user.photoURL || null
      })
      // TODO
      // move this flow to the RoutesRedirect
      history.push(`/users/${user.uid}/edit`)
    } else {
      history.push(`/users`)
    }
  }

  return (
    <PageWrapper
      alignMiddle
      height="100%"
      headingProps={{
        title: 'Welcome 👋',
        subTitle: 'Please, login into the system',
        marginBottom: 40
      }}
      contentWidth={['100%', '100%', 700]}
    >
      <Button type="primary" size="large" block onClick={login}>
        Login
        <span style={{ marginLeft: '8px' }} role="img" aria-label="icon">
          🚀
        </span>
      </Button>
    </PageWrapper>
  )
}
export default Login
