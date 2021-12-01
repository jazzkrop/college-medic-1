import { Link } from 'react-router-dom'
import { Col, Row, Text, Button } from '@qonsoll/react-design'
import { updateDoc, doc, arrayUnion, arrayRemove } from '@firebase/firestore'
import { firestore } from 'services/firebase'
const UserSimpleView = ({ user, requiredActionId }) => {
  const asignRequiredAction = (id) => {
    // if (!user.doneRequiredActions) {
    //   user.doneRequiredActions = []
    // }
    updateDoc(doc(firestore, 'users', user.id), {
      doneRequiredActions: arrayUnion(id)
    })
  }
  const unasignRequiredAction = (id) => {
    updateDoc(doc(firestore, 'users', user.id), {
      doneRequiredActions: arrayRemove(id)
    })
  }

  const birthDate = new Date(user.birthDate?.seconds * 1000)
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  let birthDateDisplay = `${birthDate.getDate()} ${
    months[birthDate.getMonth()]
  } ${birthDate.getFullYear()}`
  if (birthDateDisplay.includes('NaN')) {
    birthDateDisplay = ''
  }
  return (
    <Link to={'/users/' + user.id}>
      <Row>
        <Col>
          <Text>
            {user.firstName} {user.lastName}
          </Text>
        </Col>
        <Col>
          <Text>{user.role}</Text>
        </Col>
        <Col>
          <Text>{user.group}</Text>
        </Col>
        <Col>
          <Text>{birthDateDisplay}</Text>
        </Col>
        {requiredActionId ? (
          <Col>
            {user.doneRequiredActions ? (
              user.doneRequiredActions.includes(requiredActionId) ? (
                // TODO
                // remove button onClick redirect to user profile page
                <Button
                  ghost={true}
                  onClick={() => {
                    unasignRequiredAction(requiredActionId)
                  }}
                >
                  Unasign
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    asignRequiredAction(requiredActionId)
                  }}
                  ghost={true}
                  type="primary"
                >
                  Asign
                </Button>
              )
            ) : (
              <Button
                onClick={() => {
                  asignRequiredAction(user.id)
                }}
                ghost={true}
                type="primary"
              >
                Asign
              </Button>
            )}
          </Col>
        ) : null}
      </Row>
    </Link>
  )
}
export default UserSimpleView
