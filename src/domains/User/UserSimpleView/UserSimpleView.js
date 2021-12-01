import { Link } from 'react-router-dom'
import { Col, Row, Text } from '@qonsoll/react-design'

const UserSimpleView = ({ user }) => {
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
          <Text>{user.birthDate}</Text>
        </Col>
      </Row>
    </Link>
  )
}
export default UserSimpleView
