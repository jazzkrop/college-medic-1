import React from 'react'
import { Form, Input, Button, Select, DatePicker, Col, Row, Space } from 'antd'

const RequiredActionSimpleForm = ({ id }) => {
  const { TextArea } = Input
  return (
    <Form layout="horizontal">
      <Row>
        <Col span={6}>
          <Row>
            <Col span={24}>
              <Form.Item name="attendeesMinYear" label="Min year">
                {/* TODO */}
                {/* find beter way to set width */}
                <DatePicker style={{ width: '90%' }} picker="year" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={23}>
              <Form.Item name="attendeesRole" label="Role">
                <Select placeholder="Select role">
                  <Select.Option value="student">Student</Select.Option>
                  <Select.Option value="curator">Curator</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={23}>
              <Form.Item name="attendeesGender" label="Gender">
                <Select placeholder="Select gender">
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={14}>
              <Form.Item name="title" label="Title">
                <Input placeholder="Enter title" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={14}>
              <Form.Item name="details" label="Details">
                <TextArea rows={6} placeholder="Enter details" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
export default RequiredActionSimpleForm
