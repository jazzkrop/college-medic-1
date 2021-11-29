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
  return (
    <Menu mode="inline">
      {menuItems.map((item) => (
        <MenuItem icon={item.icon}>{item.text}</MenuItem>
      ))}
    </Menu>
  )
}

export default MainMenu
