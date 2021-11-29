import PropTypes from 'prop-types'
import { Header, Container, Row, Col } from '@qonsoll/react-design'

const LayoutHeader = ({ left, center, right }) => {
  return (
    <Header>
      <Container>
        <Row>
          <Col cw={2}>{left}</Col>
          <Col justifyContent="center">{center}</Col>
          <Col cw={2}>{right}</Col>
        </Row>
      </Container>
    </Header>
  )
}

LayoutHeader.propTypes = {
  center: PropTypes.element,
  left: PropTypes.element,
  right: PropTypes.element
}

export default LayoutHeader
