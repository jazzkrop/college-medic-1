import { Link } from 'react-router-dom'
import { Col, Row, Text } from '@qonsoll/react-design'

const RequiredActionSimpleView = ({ id, title, description, attendees }) => {
  const numberOfAttendees = attendees.length
  return (
    <Link to={'/required-actions/' + id}>
      <Row>
        <Col>
          <Text>{title}</Text>
        </Col>
        <Col>
          <Text>{description}</Text>
        </Col>
        <Col>
          <Text>{numberOfAttendees}</Text>
        </Col>
      </Row>
    </Link>
  )
}
export default RequiredActionSimpleView
