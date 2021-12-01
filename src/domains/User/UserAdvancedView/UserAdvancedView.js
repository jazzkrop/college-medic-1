import {
  Col,
  Container,
  Divider,
  Row,
  Title,
  Text,
  Avatar
} from '@qonsoll/react-design'
import { doc } from 'firebase/firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { firestore } from 'services/firebase'

const UserAdvancedView = ({ id }) => {
  const [user, loading, error] = useDocumentData(doc(firestore, 'users', id), {
    snapshotListenOptions: { includeMetadataChanges: true }
  })

  const birthDate = new Date(user?.birthDate?.seconds * 1000)
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  let birthDateDisplay = `${birthDate.getDate()} ${
    months[birthDate.getMonth()]
  } ${birthDate.getFullYear()}`
  if (birthDateDisplay.includes('NaN')) {
    birthDateDisplay = ''
  }
  return (
    <Container>
      <Row mb={3}>
        <Col cw={[12, 12, 'auto']}>
          <Avatar size="large" src={user?.avatarUrl}></Avatar>
        </Col>
        <Col>
          <Row>
            <Col>
              <Title level={2}>
                {user?.lastName} {user?.firstName} {user?.secondName}
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title level={5}>{user?.role}</Title>
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
                  <Text>{birthDateDisplay}</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Gender:</Text>
                </Col>
                <Col>
                  <Text>{user?.gender}</Text>
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
              {user?.course ? (
                <Row>
                  <Col>
                    <Text>Course:</Text>
                  </Col>
                  <Col>
                    <Text>{user?.course}</Text>
                  </Col>
                </Row>
              ) : null}
              {user?.group ? (
                <Row>
                  <Col>
                    <Text>Group:</Text>
                  </Col>
                  <Col>
                    <Text>{user?.group}</Text>
                  </Col>
                </Row>
              ) : null}
              {user?.fieldOfStudy ? (
                <Row>
                  <Col>
                    <Text>Field of study:</Text>
                  </Col>
                  <Col>
                    <Text>{user?.fieldOfStudy}</Text>
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
