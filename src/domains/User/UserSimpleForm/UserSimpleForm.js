import { Form, DatePicker, Select } from 'antd'
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  // Select,
  Title
} from '@qonsoll/react-design'

const onFinish = (values) => {
  console.log(values)
}

const UserSimpleForm = ({ id }) => {
  return (
    <Form layout="vertical">
      <Container>
        <Row mb={3}>
          <Col>
            <Title level={5}>Main information</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="lastName" label="First name">
              <Input placeholder="Enter your last name" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="firstName" label="First name">
              <Input placeholder="Enter your first name" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="secondName" label="Second name">
              <Input placeholder="Enter your second name" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="role" label="Role">
              <Select placeholder="Choose your role">
                <Select.Option value="student">Student</Select.Option>
                <Select.Option value="nurse">Nurse</Select.Option>
                <Select.Option value="curator">Curator</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row mb={3}>
          <Col>
            <Title level={5}>Personal information</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="birthDate" label="Birth Date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="gender" label="Gender">
              <Select placeholder="Choose your gender">
                <Select.Option value="student">Male</Select.Option>
                <Select.Option value="nurse">Female</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row mb={3}>
          <Col>
            <Title level={5}>Additional information</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="course" label="Course">
              <Select placeholder="Choose course number">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4">4</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="group" label="Group">
              <Select placeholder="Choose your group">
                <Select.Option value="group 1">group 1</Select.Option>
                <Select.Option value="group 2">group 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="fieldOfStudy" label="Choose field of study">
              <Select placeholder="Choose field of study">
                <Select.Option value="softwareEngineering">
                  Software engineering
                </Select.Option>
                <Select.Option value="roadTransport">
                  Road transport
                </Select.Option>
                <Select.Option value="computerEngineering">
                  Computer Engineering
                </Select.Option>
                <Select.Option value="economics">Economics</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row h="right">
          <Col cw="auto">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}
export default UserSimpleForm
