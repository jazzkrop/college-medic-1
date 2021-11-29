import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, MenuItem } from '@qonsoll/react-design'
import { AppstoreOutlined, TeamOutlined } from '@ant-design/icons'

const menuItems = [
  {
    icon: <AppstoreOutlined />,
    text: 'Users'
  },
  {
    icon: <TeamOutlined />,
    text: 'Required actions'
  }
]

const MainMenu = () => {
  const history = useHistory()
  const menuItems = useMemo(
    () => [
      {
        icon: <AppstoreOutlined />,
        text: 'Users',
        onClick: () => history.push('/users')
      },
      {
        icon: <TeamOutlined />,
        text: 'Required actions',
        onClick: () => history.push('/required-actions')
      },
      {
        icon: <TeamOutlined />,
        text: 'Groups',
        onClick: () => history.push('/groups')
      }
    ],
    [history]
  )
  return (
    <Menu mode="inline">
      {menuItems.map((item) => (
        <MenuItem icon={item.icon} onClick={item.onClick}>
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default MainMenu
