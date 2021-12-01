import { PageWrapper, Button } from '@qonsoll/react-design'
import { UserAdvancedView } from 'domains/User'
import { useParams, useHistory } from 'react-router-dom'

const UserProfile = () => {
  const { id } = useParams()
  const history = useHistory()
  return (
    <PageWrapper>
      <Button
        type="primary"
        position="fixed"
        top="4"
        right="7"
        onClick={() => {
          history.push(`/users/${id}/edit`)
        }}
      >
        Edit
      </Button>
      <UserAdvancedView id={id} />
    </PageWrapper>
  )
}
export default UserProfile
