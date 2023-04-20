import { BulbOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

type NavSelects = {
    key: number,
    icon: React.ReactElement,
    label: any
}

const NavBarButtons: NavSelects[] = [
    {
        key: 1,
        icon: React.createElement(UserOutlined),
        label: <Link to='/account'>Аккаунт</Link>
    },
    {
        key: 2,
        icon: React.createElement(BulbOutlined),
        label: <Link to='/strategies'>Стратегии</Link>
    },
]

export default NavBarButtons