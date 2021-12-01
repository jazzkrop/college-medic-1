import React, { useEffect } from 'react'
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
import { firestore } from 'services/firebase'
import { doc, updateDoc, setDoc, collection } from 'firebase/firestore'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

const newId = doc(collection(firestore, 'users')).id

const UserSimpleForm = ({ id }) => {
  const recordId = id || newId
  const history = useHistory()
  const [user, loading, error] = useDocumentDataOnce(
    doc(firestore, 'users', recordId),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  const [form] = Form.useForm()

  const onFinish = (values) => {
    Object.keys(values).forEach((key) =>
      values[key] === undefined ? delete values[key] : {}
    )
    values.birthDate ? (values.birthDate = values?.birthDate._d) : (values = {})

    id
      ? updateDoc(doc(firestore, 'users', recordId), {
          ...values,
          id: recordId
        })
      : setDoc(doc(firestore, 'users', recordId), {
          ...values,
          id: recordId
        })
    history.push('/users')
  }
  useEffect(() => {
    if (user) user.birthDate = moment(new Date(user.birthDate?.seconds * 1000))
    user && form.setFieldsValue(user)
  }, [form, user])

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Container>
        <Row mb={3}>
          <Col>
            <Title level={5}>Main information</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="lastName" label="Last name">
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
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
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
            <Button
              type="dashed"
              onClick={() => {
                console.log('akjhbgkjasdhbvaksej')
              }}
            >
              Cancel
            </Button>
          </Col>
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
