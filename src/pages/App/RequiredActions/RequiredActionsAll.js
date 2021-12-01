import { PageWrapper, Button } from '@qonsoll/react-design'
import { RequiredActionsList } from 'domains/RequiredAction'
import { useHistory } from 'react-router-dom'

const RequiredActionsAll = (props) => {
  const history = useHistory()
  return (
    <PageWrapper headingProps={{ title: 'Required actions' }}>
      <Button
        type="primary"
        position="fixed"
        top="4"
        right="7"
        onClick={() => {
          history.push('/required-action/create')
        }}
      >
        Create Require Action
      </Button>

      <RequiredActionsList />
    </PageWrapper>
  )
}
export default RequiredActionsAll
