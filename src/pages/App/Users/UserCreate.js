import { Row, Col } from 'antd'
import { UserSimpleForm } from 'domains/User'

const UserCreate = (props) => {
  return (
    <div>
      <Row>
        <Col>
          <h1>User Profile Edit</h1>
        </Col>
      </Row>
      <UserSimpleForm />
    </div>
  )
}
export default UserCreate
