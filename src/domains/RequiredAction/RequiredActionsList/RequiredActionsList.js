import {
  Col,
  Container,
  Divider,
  Row,
  Title,
  HeadingPrimary
} from '@qonsoll/react-design'
import { RequiredActionSimpleView } from 'domains/RequiredAction'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'services/firebase'

const RequiredActionsList = (props) => {
  const [requiredActions, loading, error] = useCollectionData(
    collection(firestore, 'required-actions'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  return (
    <Container>
      <Row mb={2}>
        <Col>
          <Title level={5}>Title</Title>
        </Col>
        <Col>
          <Title level={5}>Desciption</Title>
        </Col>
      </Row>
      <Divider mb={1} />
      {error && <HeadingPrimary>Error: {JSON.stringify(error)}</HeadingPrimary>}
      {loading && <Title>Collection: Loading...</Title>}
      {requiredActions && (
        <>
          {requiredActions.map((requiredAction) => {
            return (
              <>
                <RequiredActionSimpleView {...requiredAction} />
                <Divider mb={1} />
              </>
            )
          })}
        </>
      )}
    </Container>
  )
}
export default RequiredActionsList
