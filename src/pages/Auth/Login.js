import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from '@firebase/firestore'
import { useHistory } from 'react-router-dom'
import { app } from 'services/firebase'

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
        firstName: user.displayName || null,
        avatarUrl: user.photoURL || null
      })
      history.push(`/users/${user.uid}/edit`)
    }
    history.push(`/users/${user.uid}/edit`)
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={login}>Login or Sign Up</button>
      </div>
    </div>
  )
}
export default Login
