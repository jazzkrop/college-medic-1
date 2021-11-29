import { PageWrapper } from '@qonsoll/react-design'
import { UsersList } from 'domains/User'

const UsersAll = (props) => {
  return (
    <PageWrapper headingProps={{ title: 'All users' }}>
      <UsersList />
    </PageWrapper>
  )
}
export default UsersAll
