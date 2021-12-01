import React from 'react'
import { Form, Select, DatePicker } from 'antd'
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  // Select,
  Title,
  TextArea
} from '@qonsoll/react-design'
import { firestore } from 'services/firebase'
import { doc, updateDoc, collection, setDoc } from 'firebase/firestore'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router-dom'
const newId = doc(collection(firestore, 'required-actions')).id

const RequiredActionSimpleForm = ({ id }) => {
  const recordId = id || newId
  const history = useHistory()
  const [initialValues, loading, error] = useDocumentDataOnce(
    doc(firestore, 'required-actions', recordId),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  console.log('initial ->', initialValues)
  const onFinish = (values) => {
    Object.keys(values).forEach((key) =>
      values[key] === undefined ? delete values[key] : {}
    )
    if (values.minYear) {
      values.minYear = values?.minYear._d
    }
    id
      ? updateDoc(doc(firestore, 'required-actions', recordId), {
          ...values,
          recordId
        })
      : setDoc(doc(firestore, 'required-actions', recordId), {
          ...values,
          recordId
        })
    history.push('/required-actions')
  }
  return (
    <Form layout="vertical" initialValues={initialValues} onFinish={onFinish}>
      <Container>
        <Row mb={3}>
          <Col>
            <Title level={5}>Main information</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="title" label="Title">
              <Input placeholder="Enter title" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="description" label="Description">
              <TextArea rows={4} placeholder="Enter description" />
            </Form.Item>
          </Col>
        </Row>
        <Row mb={3}>
          <Col>
            <Title level={5}>Attendees information</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="attendeesMinYear" label="Min year">
              <DatePicker style={{ width: '90%' }} picker="year" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="attendeesRole" label="Role">
              <Select placeholder="Select role">
                <Select.Option value="student">Student</Select.Option>
                <Select.Option value="curator">Curator</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="attendeesGender" label="Gender">
              <Select placeholder="Select gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
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
export default RequiredActionSimpleForm
