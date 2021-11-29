import { PageWrapper } from '@qonsoll/react-design'
import GroupSimpleForm from '../../../domains/Group/GroupSimpleForm/GroupSimpleForm'

const GroupCreate = (props) => {
  return (
    <PageWrapper headingProps={{ title: 'Create group' }}>
      <GroupSimpleForm />
    </PageWrapper>
  )
}
export default GroupCreate
