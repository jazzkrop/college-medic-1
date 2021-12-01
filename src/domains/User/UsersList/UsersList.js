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
        // let addItem = true
        if (requiredAction.attendeesMinYear) {
          if (
            new Date(item.birthDate.seconds * 1000).getFullYear() >
            new Date(
              requiredAction.attendeesMinYear.seconds * 1000
            ).getFullYear()
          ) {
            return
          }
        }
        if (requiredAction.attendeesRole) {
          if (item.role != requiredAction.attendeesRole) {
            return
          }
        }
        if (requiredAction.attendeesGender) {
          if (item.role != requiredAction.attendeesGender) {
            return
          }
        }
        return item
      })
    } else users = value
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
        <Col></Col>
        {requiredActionId ? (
          <Col>
            <Title level={5}>Actions</Title>
          </Col>
        ) : null}
      </Row>
      <Divider mb={1} />
      {error && <HeadingPrimary>Error: {JSON.stringify(error)}</HeadingPrimary>}
      {loading && <Title>Collection: Loading...</Title>}
      {users && (
        <>
          {users?.map((user) => {
            console.log('user req ->', user)
            return (
              <>
                <UserSimpleView
                  user={user}
                  requiredActionId={requiredActionId}
                />
                <Divider mb={1} />
              </>
            )
          })}
        </>
      )}
    </Container>
  )
}
export default UsersList
