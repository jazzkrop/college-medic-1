import { Col, Container, Divider, Row, Title } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User'

const UsersList = (props) => {
  const users = [
    {
      id: 'fewbiufewibu',
      firstName: 'Danil',
      lastName: 'Sheremeta',
      group: 'PI-182',
      birthDate: '2003-07-28',
      role: 'student'
    },
    {
      id: 'ksdjhbvshSDv',
      firstName: 'Ivan',
      lastName: 'Petro',
      group: 'PI-182',
      birthDate: '2002-07-28',
      role: 'student'
    },
    {
      id: 'sdvkjvdsjvdssdvjh',
      firstName: 'Iryna',
      lastName: 'Gutnik',
      group: 'PI-182',
      birthDate: '1979-03-23',
      role: 'curator'
    }
  ]
  return (
    <Container>
      <Row mb={2}>
        <Col>
          <Title level={5}>Name</Title>
        </Col>
        <Col>
          <Title level={5}>Role</Title>
        </Col>
        <Col>
          <Title level={5}>Group</Title>
        </Col>
        <Col>
          <Title level={5}>Birth date</Title>
        </Col>
      </Row>
      <Divider mb={1} />
      {users.map((user) => {
        return (
          <>
            <UserSimpleView {...user} /> <Divider mb={1} />
          </>
        )
      })}
    </Container>
  )
}
export default UsersList
