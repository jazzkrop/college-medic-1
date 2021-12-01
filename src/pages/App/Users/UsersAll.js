import { Button, PageWrapper } from '@qonsoll/react-design'
import { UsersList } from 'domains/User'
import { useHistory } from 'react-router-dom'

const UsersAll = (props) => {
  const history = useHistory()
  return (
    <PageWrapper headingProps={{ title: 'All users' }}>
      <Button
        type="primary"
        position="fixed"
        top="4"
        right="7"
        onClick={() => {
          history.push('/user/create')
        }}
      >
        Create User
      </Button>
      <UsersList />
    </PageWrapper>
  )
}
export default UsersAll
