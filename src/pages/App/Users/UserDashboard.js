import { collection, doc } from '@firebase/firestore'
import {
  PageWrapper,
  Button,
  Container,
  Row,
  Col,
  Divider,
  Text,
  Avatar,
  Title,
  HeadingPrimary
} from '@qonsoll/react-design'
import { UserAdvancedView } from 'domains/User'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  useDocumentData,
  useCollectionData
} from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router-dom'
import { auth, firestore } from 'services/firebase'
import { RequiredActionSimpleView } from 'domains/RequiredAction'

const UserDashboard = () => {
  const history = useHistory()
  const [userAuth] = useAuthState(auth)
  const [user] = useDocumentData(doc(firestore, 'users', userAuth?.uid), {
    snapshotListenOptions: { includeMetadataChanges: true }
  })
  const [requiredActionsSnap, loading, error] = useCollectionData(
    collection(firestore, 'required-actions'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  let requiredActions = requiredActionsSnap || undefined
  if (requiredActions) {
    requiredActions = requiredActions.map((requiredAction) => {
      if (requiredAction.attendeesMinYear) {
        if (
          new Date(user?.birthDate.seconds * 1000).getFullYear() >
          new Date(requiredAction.attendeesMinYear.seconds * 1000).getFullYear()
        ) {
          return
        }
      }
      if (requiredAction.attendeesRole) {
        if (user?.role != requiredAction.attendeesRole) {
          return
        }
      }
      if (requiredAction.attendeesGender) {
        if (user?.gender != requiredAction.attendeesGender) {
          return
        }
      }
      return requiredAction
    })
  }

  requiredActions = requiredActions?.filter(function (item) {
    return item !== undefined
  })
  return (
    <PageWrapper>
      <Button
        type="primary"
        position="fixed"
        top="4"
        right="7"
        onClick={() => {
          history.push(`/users/${userAuth.uid}/edit`)
        }}
      >
        Edit
      </Button>
      <Container>
        <Row mb={2}>
          <Col cw={[12, 12, 'auto']}>
            <Avatar size="large" src={user?.avatarUrl}></Avatar>
          </Col>
          <Col>
            <Title level={2}>
              {user?.lastName} {user?.firstName}
            </Title>
          </Col>
        </Row>
        <Divider mb={2} />
        <Row mb={2}>
          <Col>
            <Title level={5}>Main information</Title>
          </Col>
        </Row>
        <Row mb={1}>
          <Col cw={[12, 12, 6]}>
            <Text>First name:</Text>
          </Col>
          <Col>
            <Text>{user?.firstName}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Second name:</Text>
          </Col>
          <Col>
            <Text>{user?.secondName}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Last name:</Text>
          </Col>
          <Col>
            <Text>{user?.lastName}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Role:</Text>
          </Col>
          <Col>
            <Text>{user?.role}</Text>
          </Col>
        </Row>
        <Row mt={4} mb={2}>
          <Col>
            <Title level={3}>Required Actions</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Title</Text>
          </Col>
          <Col>
            <Text>Description</Text>
          </Col>
          <Col>
            <Text>Status</Text>
          </Col>
          <Divider mb={3} />
        </Row>
        {error && (
          <HeadingPrimary>Error: {JSON.stringify(error)}</HeadingPrimary>
        )}
        {loading && <Title>Collection: Loading...</Title>}
        {requiredActions && (
          <>
            {requiredActions.map((requiredAction) => {
              const status = user?.doneRequiredActions.includes(
                requiredAction.id
              )
                ? 'Done'
                : 'Not done'

              return (
                <>
                  <RequiredActionSimpleView
                    {...requiredAction}
                    status={status}
                  />
                  <Divider mb={1} />
                </>
              )
            })}
          </>
        )}
      </Container>
    </PageWrapper>
  )
}
export default UserDashboard
