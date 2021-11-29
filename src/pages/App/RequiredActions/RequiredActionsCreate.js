import { PageWrapper } from '@qonsoll/react-design'
import { RequiredActionSimpleForm } from 'domains/RequiredAction'

const RequiredActionsCreate = (props) => {
  return (
    <PageWrapper headingProps={{ title: 'Create required action' }}>
      <RequiredActionSimpleForm />
    </PageWrapper>
  )
}
export default RequiredActionsCreate
