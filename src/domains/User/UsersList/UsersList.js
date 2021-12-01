import {
  Col,
  Container,
  Divider,
  HeadingPrimary,
  Row,
  Title
} from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'services/firebase'

const UsersList = ({ requiredActionId }) => {
  const [value, loading, error] = useCollectionData(
    collection(firestore, 'users'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  let users = value || undefined
  const [requiredActions] = useCollectionData(
    collection(firestore, 'required-actions'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  let requiredAction = undefined
  if (requiredActionId) {
    requiredActions?.map((item) => {
      if (item.id == requiredActionId) {
        requiredAction = item
      }
    })
    if (requiredAction) {
      users = value?.map((item) => {
        if (
          requiredAction.attendeesMinYear &&
          new Date(item.birthDate.seconds * 1000).getFullYear() <=
            new Date(
              requiredAction.attendeesMinYear.seconds * 1000
            ).getFullYear()
        )
          return item
      })
    }
  }
  users = users?.filter(function (item) {
    return item !== undefined
  })
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
      {error && <HeadingPrimary>Error: {JSON.stringify(error)}</HeadingPrimary>}
      {loading && <Title>Collection: Loading...</Title>}
      {users && (
        <>
          {users?.map((user) => {
            return (
              <>
                <UserSimpleView user={user} /> <Divider mb={1} />
              </>
            )
          })}
        </>
      )}
    </Container>
  )
}
export default UsersList
