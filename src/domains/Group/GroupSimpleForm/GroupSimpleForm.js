import React, { useEffect } from 'react'
import { Form, Select, DatePicker } from 'antd'
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
import {
  doc,
  updateDoc,
  collection,
  setDoc,
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

  const [curators, loading, error] = useCollectionDataOnce(
    query(collection(firestore, 'users'), where('role', '==', 'curator')),
    {}
  )

  const [group] = useDocumentDataOnce(doc(firestore, 'groups', recordId), {
    snapshotListenOptions: { includeMetadataChanges: true }
  })

  const [form] = Form.useForm()

  const onFinish = (values) => {
    Object.keys(values).forEach((key) =>
      values[key] === undefined ? delete values[key] : {}
    )
    id
      ? updateDoc(doc(firestore, 'groups', recordId), {
          ...values,
          id: recordId
        })
      : setDoc(doc(firestore, 'groups', recordId), {
          ...values,
          id: recordId
        })
    history.push('/groups')
  }
  useEffect(() => {
    group && form.setFieldsValue(group)
  }, [form, group])
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
            <Form.Item name="name" label="Name">
              <Input placeholder="Enter name" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="curator" label="Curator">
              <Select placeholder="Select curator">
                {curators?.map((curator) => {
                  return (
                    <Select.Option value={curator.id}>
                      {curator.lastName} {curator.firstName}{' '}
                      {curator.secondName}
                    </Select.Option>
                  )
                })}
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
