import { Col } from 'antd'
import { Row } from '@qonsoll/react-design'
import { UserSimpleForm } from 'domains/User'
import { useParams } from 'react-router'

const UserProfileEdit = (props) => {
  const { id } = useParams()
  return (
    <>
      <Row mb={16} mt={12}>
        <Col>
          <h1>User Profile Edit</h1>
        </Col>
      </Row>
      <UserSimpleForm id={id} />
    </>
  )
}
export default UserProfileEdit
