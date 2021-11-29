import { PageWrapper } from '@qonsoll/react-design'
import { GroupsList } from 'domains/Group'

const GroupsAll = (props) => {
  return (
    <PageWrapper headingProps={{ title: 'Groups' }}>
      <GroupsList />
    </PageWrapper>
  )
}
export default GroupsAll
