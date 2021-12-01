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
import {
  doc,
  updateDoc,
  collection,
  setDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore'
import {
  useDocumentDataOnce,
  useCollectionDataOnce
} from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router-dom'

const newId = doc(collection(firestore, 'groups')).id

const GroupSimpleForm = ({ id }) => {
  const recordId = id || newId
  const history = useHistory()

  const [values, loading, error] = useCollectionDataOnce(
    query(collection(firestore, 'users'), where('role', '==', 'curator')),
    {}
  )

  console.log('YOUR CURATORS ->', values)

  const [initialValues] = useDocumentDataOnce(
    doc(firestore, 'groups', recordId),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )

  console.log('initial ->', initialValues)

  const onFinish = (values) => {
    Object.keys(values).forEach((key) =>
      values[key] === undefined ? delete values[key] : {}
    )
    id
      ? updateDoc(doc(firestore, 'groups', recordId), {
          ...values,
          recordId
        })
      : setDoc(doc(firestore, 'groups', recordId), {
          ...values,
          recordId
        })
    history.push('/groups')
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
            <Form.Item name="name" label="Name">
              <Input placeholder="Enter name" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="curator" label="Curator">
              <Select placeholder="Select curator">
                <Select.Option value="ID_OF_CURATOR_1">
                  Name of curator 1
                </Select.Option>

                <Select.Option value="ID_OF_CURATOR_2">
                  Name of curator 2
                </Select.Option>

                <Select.Option value="ID_OF_CURATOR_3">
                  Name of curator 3
                </Select.Option>

                <Select.Option value="ID_OF_CURATOR_4">
                  Name of curator 4
                </Select.Option>
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
export default GroupSimpleForm
