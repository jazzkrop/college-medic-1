import React from 'react'
import { Form, Input, Button, Select, DatePicker, Col, Row, Space } from 'antd'


const RequiredActionSimpleForm = ({id}) => {
  return (
    <Form layout="horizontal">
      <Row>
        <Col>
          <Space size={'large'}>
            <Form.Item name="lastName" label="First name">
              <Input placeholder="Enter your last name" />
            </Form.Item>
            <Form.Item name="firstName" label="First name">
              <Input placeholder="Enter your first name" />
            </Form.Item>
            <Form.Item name="secondName" label="Second name">
              <Input placeholder="Enter your second name" />
            </Form.Item>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col>
          <Space size={'large'}>
            <Form.Item label="Birth Date">
              <DatePicker />
            </Form.Item>
            <Form.Item name="group" label="Group">
              <Select placeholder="your group">
                <Select.Option value="group 1">group 1</Select.Option>
                <Select.Option value="group 2">group 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="role" label="Role">
              <Select placeholder="your role">
                <Select.Option value="student">Student</Select.Option>
                <Select.Option value="nurse">Nurse</Select.Option>
                <Select.Option value="curator">Curator</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Select placeholder="your gender">
                <Select.Option value="student">Student</Select.Option>
                <Select.Option value="nurse">Nurse</Select.Option>
                <Select.Option value="curator">Curator</Select.Option>
              </Select>
            </Form.Item>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col>
          <Space size={'large'}>
            <Form.Item name="course" label="Course">
              <Select placeholder="your course">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4">4</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="fieldOfStudy" label="Field of study">
              <Select placeholder="field of study">
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
          </Space>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
export default RequiredActionSimpleForm
