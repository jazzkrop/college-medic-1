import { PageWrapper } from '@qonsoll/react-design'
import { RequiredActionSimpleForm } from 'domains/RequiredAction'
import { useParams } from 'react-router-dom'

const RequiredActionsEdit = () => {
  const { id } = useParams()
  return (
    <PageWrapper headingProps={{ title: 'Edit required action' }}>
      <RequiredActionSimpleForm id={id} />
    </PageWrapper>
  )
}
export default RequiredActionsEdit
