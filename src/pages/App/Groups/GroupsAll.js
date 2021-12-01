import { PageWrapper, Button } from '@qonsoll/react-design'
import { GroupsList } from 'domains/Group'
import { useHistory } from 'react-router-dom'

const GroupsAll = () => {
  const history = useHistory()
  return (
    <PageWrapper headingProps={{ title: 'Groups' }}>
      <Button
        type="primary"
        position="fixed"
        top="4"
        right="7"
        onClick={() => {
          history.push('/group/create')
        }}
      >
        Create Group
      </Button>
      <GroupsList />
    </PageWrapper>
  )
}
export default GroupsAll
