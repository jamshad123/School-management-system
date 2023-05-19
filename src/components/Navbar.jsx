import React from 'react'
import { Menu, Switch, Input } from 'antd'
import {
    WhatsAppOutlined,
    SwapOutlined,
    CalendarOutlined,
    SearchOutlined

} from '@ant-design/icons';
import { MdTaskAlt } from 'react-icons/md'

const Navbar = ({ theme, changeTheme }) => {
    const items = [
        {
            label: 'USD',
            key: 'usd'
        },
        {
            key: 'switch-branch',
            label: <SwapOutlined />
        },
        {
            key: 'calendar',
            label: <CalendarOutlined />
        },
        {
            key: 'tasks',
            label: <MdTaskAlt />
        },
        {
            key: 'chat',
            label: <WhatsAppOutlined />
        }
    ];

    return (
        <Menu mode="horizontal" theme={theme} style={{ display: 'flex', alignItems: 'center'}}>
            <h2 style={{ margin: '0 150px 0 30px' }}>Mount Caramel School</h2>
            <Input.Search placeholder="Search" prefix={<SearchOutlined />} style={{ width: '250px', margin: '0 200px 0 0' }} />
                {
                    items.map((item) => {
                        return <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
                    })
                }
            <Switch checked={theme === 'dark'} onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
        </Menu>
    )
}

export default Navbar
