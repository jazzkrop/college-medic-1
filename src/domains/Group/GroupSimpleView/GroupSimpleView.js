import { Link } from 'react-router-dom'
import { Col, Row, Text } from '@qonsoll/react-design'

const UserSimpleView = ({ id, name, curator, students }) => {
  const numberOfStudents = students.length

  return (
    <Link to={'/groups/' + id}>
      <Row>
        <Col>
          <Text>{name}</Text>
        </Col>
        <Col>
          <Text>{curator}</Text>
        </Col>
        <Col>
          <Text>{numberOfStudents}</Text>
        </Col>
      </Row>
    </Link>
  )
}
export default UserSimpleView
