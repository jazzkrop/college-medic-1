import { Col, Container, Divider, Row, Title } from '@qonsoll/react-design'
import { GroupSimpleView } from 'domains/Group'

const GroupsList = (props) => {
  const groups = [
    {
      id: 'fewbiufewibu',
      name: 'PI-182',
      curator: 'id-5',
      students: ['id-1', 'id-2', 'id-3']
    },
    {
      id: 'fewbiufewibu',
      name: 'PI-181',
      curator: 'id-6',
      students: ['id-7', 'id-8', 'id-5']
    },
    {
      id: 'fewbiufewibu',
      name: 'AT-181',
      curator: 'id-12',
      students: ['id-11', 'id-212', 'id-31']
    }
  ]
  return (
    <Container>
      <Row mb={2}>
        <Col>
          <Title level={5}>Name</Title>
        </Col>
        <Col>
          <Title level={5}>Curator</Title>
        </Col>
        <Col>
          <Title level={5}>Number of students</Title>
        </Col>
      </Row>
      <Divider mb={1} />
      {groups.map((group) => {
        return (
          <>
            <GroupSimpleView {...group} /> <Divider mb={1} />
          </>
        )
      })}
    </Container>
  )
}
export default GroupsList
