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

const GroupSimpleForm = (props) => {
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
