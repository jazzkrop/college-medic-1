import { Link } from 'react-router-dom'
import { Col, Row, Text } from '@qonsoll/react-design'

const RequiredActionSimpleView = ({ id, title, description, status }) => {
  return (
    <Link to={'/required-actions/' + id}>
      <Row>
        <Col>
          <Text>{title}</Text>
        </Col>
        <Col>
          <Text>{description}</Text>
        </Col>
        {status ? (
          <Col>
            <Text disabled={status == 'Done' ? true : false}>{status}</Text>
          </Col>
        ) : null}
      </Row>
    </Link>
  )
}
export default RequiredActionSimpleView
