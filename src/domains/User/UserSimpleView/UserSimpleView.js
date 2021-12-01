import { Link } from 'react-router-dom'
import { Col, Row, Text } from '@qonsoll/react-design'

const UserSimpleView = ({ user }) => {
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
      </Row>
    </Link>
  )
}
export default UserSimpleView
