import { PageWrapper } from '@qonsoll/react-design'
import { UserAdvancedView } from 'domains/User'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { id } = useParams()
  return (
    <PageWrapper>
      <UserAdvancedView id={id} />
    </PageWrapper>
  )
}
export default UserProfile
