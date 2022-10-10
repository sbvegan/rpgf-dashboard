import type { MenuProps } from 'antd';
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem => { 
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps["items"] = [
    getItem(<Link to="/rpgf">Retroactive Public Goods Funding</Link>, '1'),
    getItem(<Link to="/dashboard">Analytics Dashboard</Link>, '2'),
    getItem(<Link to="/funding-rounds">Funding Rounds Breakdown</Link>, '3')
];

const Sidenav = () => {

    return (
        <>
            <Menu
                defaultSelectedKeys={['1']}
                items={items} 
            />
        </>
    )
}

export default Sidenav;