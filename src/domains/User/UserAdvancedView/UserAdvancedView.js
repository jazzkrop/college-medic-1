import {
  Col,
  Container,
  Divider,
  Row,
  Title,
  Text,
  Avatar
} from '@qonsoll/react-design'

const UserAdvancedView = ({ id }) => {
  const users = [
    {
      id: '1',
      firstName: 'Danil',
      lastName: 'Sheremeta',
      group: 'PI-182',
      birthDate: '2003-07-28',
      role: 'student'
    },
    {
      id: '2',
      firstName: 'Ivan',
      lastName: 'Petro',
      group: 'PI-182',
      birthDate: '2002-07-28',
      role: 'student'
    },
    {
      id: '3',
      firstName: 'Iryna',
      lastName: 'Gutnik',
      group: 'PI-182',
      birthDate: '1979-03-23',
      role: 'curator'
    }
  ]
  const {
    firstName,
    lastName,
    group,
    birthDate,
    role,
    secondName,
    gender,
    course,
    fieldOfStudy
  } = {
    id: '2',
    firstName: 'Ivan',
    lastName: 'Petro',
    secondName: 'Petrovich',
    group: 'PI-182',
    birthDate: '2002-07-28',
    role: 'student',
    gender: 'male',
    course: '4',
    fieldOfStudy: 'Computer science'
  }
  return (
    <Container>
      <Row mb={3}>
        <Col cw={[12, 12, 'auto']}>
          <Avatar
            size="large"
            src="https://lh3.googleusercontent.com/a/AATXAJyY-8otzV6IOUAznaEPt_qsSEZs0Npf7QY-Sbxq=s96-c"
          ></Avatar>
        </Col>
        <Col>
          <Row>
            <Col>
              <Title level={2}>
                {firstName} {lastName} {secondName}
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title level={5}>{role}</Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row mb={3}>
        <Col>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row mb={2}>
            <Col>
              <Title level={5}>Main information</Title>
            </Col>
          </Row>
          <Row mb={1}>
            <Col cw={[12, 12, 6]}>
              <Row>
                <Col>
                  <Text>First name:</Text>
                </Col>
                <Col>
                  <Text>{firstName}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Second name:</Text>
                </Col>
                <Col>
                  <Text>{secondName}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Last name:</Text>
                </Col>
                <Col>
                  <Text>{lastName}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Role:</Text>
                </Col>
                <Col>
                  <Text>{role}</Text>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Title level={5}>Personal information</Title>
            </Col>
          </Row>
          <Row>
            <Col cw={[12, 12, 6]}>
              <Row>
                <Col>
                  <Text>Birth date:</Text>
                </Col>
                <Col>
                  <Text>{birthDate}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Gender:</Text>
                </Col>
                <Col>
                  <Text>{gender}</Text>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Title level={5}>Additional information</Title>
            </Col>
          </Row>
          <Row>
            <Col cw={[12, 12, 6]}>
              {course ? (
                <Row>
                  <Col>
                    <Text>Course:</Text>
                  </Col>
                  <Col>
                    <Text>{course}</Text>
                  </Col>
                </Row>
              ) : null}
              {group ? (
                <Row>
                  <Col>
                    <Text>Group:</Text>
                  </Col>
                  <Col>
                    <Text>{group}</Text>
                  </Col>
                </Row>
              ) : null}
              {fieldOfStudy ? (
                <Row>
                  <Col>
                    <Text>Field of study:</Text>
                  </Col>
                  <Col>
                    <Text>{fieldOfStudy}</Text>
                  </Col>
                </Row>
              ) : null}
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Title level={4}>Required actions</Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default UserAdvancedView
