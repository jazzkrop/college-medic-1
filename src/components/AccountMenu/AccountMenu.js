import PropTypes from 'prop-types'
import { auth } from 'services/firebase'
import { Account } from '@qonsoll/react-design'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

const menu = [
  {
    type: 'item',
    text: 'Profile',
    icon: <UserOutlined />,
    danger: false,
    disabled: false,
    onClick: () => {
      console.log('Item #1')
    }
  },
  {
    type: 'item',
    text: 'Log out',
    icon: <LogoutOutlined />,
    danger: true,
    disabled: false,
    onClick: () => auth.signOut()
  }
]

const AccountMenu = ({ avatar, displayName, email }) => {
  return (
    <Account
      avatar={avatar}
      title={displayName || 'No name'}
      caption={email || 'No email'}
      isEllipsis
      menu={menu}
      menuPlacement="topRight"
    />
  )
}

AccountMenu.propTypes = {
  avatar: PropTypes.string,
  displayName: PropTypes.string,
  email: PropTypes.string
}

export default AccountMenu
