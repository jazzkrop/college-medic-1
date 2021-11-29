import { Row, Button, Col } from 'antd'
import { UserSimpleForm } from 'domains/User'

const UserProfileEdit = (props) => {
  const goBack = () => {
    // go back
  }
  return (
    <div>
      <Row>
        <Col span={6}>
          <Button onClick={goBack}>Go back</Button>
        </Col>
        <Col span={18}>
          <h1>User Profile Edit</h1>
        </Col>
      </Row>

      <UserSimpleForm />
    </div>
  )
}
export default UserProfileEdit
