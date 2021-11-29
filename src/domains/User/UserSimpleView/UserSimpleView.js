import { Link } from 'react-router-dom'
import { Col, Row, Text } from '@qonsoll/react-design'

const UserSimpleView = ({
  id,
  firstName,
  lastName,
  role,
  group,
  birthDate
}) => {
  return (
    <Link to={'/users/' + id}>
      <Row>
        <Col>
          <Text>
            {firstName} {lastName}
          </Text>
        </Col>
        <Col>
          <Text>{role}</Text>
        </Col>
        <Col>
          <Text>{group}</Text>
        </Col>
        <Col>
          <Text>{birthDate}</Text>
        </Col>
      </Row>
    </Link>
  )
}
export default UserSimpleView
