import { Col, Container, Divider, Row, Title } from '@qonsoll/react-design'
import { RequiredActionSimpleView } from 'domains/RequiredAction'

const RequiredActionsList = (props) => {
  const requiredActions = [
    {
      id: 'fewbiufewibu',
      title: 'Make flurography',
      description: 'One day you must to make flurography for your health',
      attendees: ['1', '2', '3', '4']
    },
    {
      id: 'dsfkjhdgr',
      title: 'Go to sleep',
      description: 'One day you must to make a good sleep for your health',
      attendees: ['1', '3', '4']
    },
    {
      id: 'sdiusdvibys',
      title: 'Go to army',
      description: 'Protect your country like a warrior!',
      attendees: ['3', '4']
    }
  ]
  return (
    <Container>
      <Row mb={2}>
        <Col>
          <Title level={5}>Title</Title>
        </Col>
        <Col>
          <Title level={5}>Desciption</Title>
        </Col>
        <Col>
          <Title level={5}>Number of attendees</Title>
        </Col>
      </Row>
      <Divider mb={1} />
      {requiredActions.map((requiredAction) => {
        return (
          <>
            <RequiredActionSimpleView {...requiredAction} />
            <Divider mb={1} />
          </>
        )
      })}
    </Container>
  )
}
export default RequiredActionsList
