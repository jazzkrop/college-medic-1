import { PageWrapper } from '@qonsoll/react-design'
import { RequiredActionsList } from 'domains/RequiredAction'

const RequiredActionsAll = (props) => {
  return (
    <PageWrapper headingProps={{ title: 'Required actions' }}>
      <RequiredActionsList />
    </PageWrapper>
  )
}
export default RequiredActionsAll
