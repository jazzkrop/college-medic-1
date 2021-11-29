import { Col } from 'antd'
import { Row } from '@qonsoll/react-design'
import { RequiredActionSimpleForm } from 'domains/RequiredAction'

const RequiredActionsCreate = (props) => {
  return (
    <div>
      <Row mb={16} mt={16}>
        <Col>
          <h1>Required Action Edit</h1>
        </Col>
      </Row>
      <RequiredActionSimpleForm />
    </div>
  )
}
export default RequiredActionsCreate
