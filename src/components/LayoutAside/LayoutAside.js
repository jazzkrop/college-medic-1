import PropTypes from 'prop-types'
import { Aside, Box } from '@qonsoll/react-design'

const LayoutAside = ({ top, center, bottom }) => {
  return (
    <Aside>
      <Box mb={40}>{top}</Box>
      <Box mb="auto" mx={-24}>
        {center}
      </Box>
      <Box ml={-3}>{bottom}</Box>
    </Aside>
  )
}

LayoutAside.propTypes = {
  bottom: PropTypes.element,
  center: PropTypes.element,
  top: PropTypes.element
}

export default LayoutAside
