import {
  PageWrapper,
  Button,
  Container,
  Row,
  Col,
  Text,
  Title,
  Divider
} from '@qonsoll/react-design'
import { UsersList } from 'domains/User'
import { useHistory, useParams } from 'react-router-dom'
import { doc } from 'firebase/firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { firestore } from 'services/firebase'

const RequiredAction = () => {
  const history = useHistory()
  const { id } = useParams()
  const [requiredAction] = useDocumentData(
    doc(firestore, 'required-actions', id),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  return (
    <PageWrapper headingProps={{ title: requiredAction?.title }}>
      <Button
        type="primary"
        position="fixed"
        top="4"
        right="7"
        onClick={() => {
          history.push(`/required-actions/${id}/edit`)
        }}
      >
        Edit Required Action
      </Button>
      <Container>
        <Row>
          <Divider mb={3} />
          <Col cw={[12, 12, 4]}>
            <Row mb={2}>
              <Col>
                <Title level={5}>Main information</Title>
              </Col>
            </Row>
            <Row mb={2}>
              <Col>
                <Text>Title:</Text>
              </Col>
              <Col>
                <Text>{requiredAction?.title}</Text>
              </Col>
            </Row>
            <Row mb={3}>
              <Col>
                <Text>Description:</Text>
              </Col>
              <Col>
                <Text>{requiredAction?.description}</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title level={5}>Ateendees information</Title>
              </Col>
            </Row>
            {requiredAction?.attendeesGender ? (
              <Row>
                <Col>
                  <Text>Gender:</Text>
                </Col>
                <Col>
                  <Text>{requiredAction?.attendeesGender}</Text>
                </Col>
              </Row>
            ) : null}

            {requiredAction?.attendeesMinYear ? (
              <Row>
                <Col>
                  <Text>Minimum Year:</Text>
                </Col>
                <Col>
                  <Text>
                    {new Date(
                      requiredAction.attendeesMinYear.seconds * 1000
                    ).getFullYear()}
                  </Text>
                </Col>
              </Row>
            ) : null}
            {requiredAction?.attendeesRole ? (
              <Row>
                <Col>
                  <Text>Role:</Text>
                </Col>
                <Col>
                  <Text>{requiredAction?.attendeesRole}</Text>
                </Col>
              </Row>
            ) : null}
          </Col>
          <Col>
            <UsersList requiredActionId={id} />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}
export default RequiredAction
