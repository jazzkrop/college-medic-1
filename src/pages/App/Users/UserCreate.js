import { PageWrapper } from '@qonsoll/react-design'
import { UserSimpleForm } from 'domains/User'

const UserCreate = (props) => {
  return (
    <PageWrapper headingProps={{ title: 'Create profile' }}>
      <UserSimpleForm />
    </PageWrapper>
  )
}
export default UserCreate
