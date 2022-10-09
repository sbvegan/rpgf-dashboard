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
    getItem('Retroactive Public Goods Funding', '1'),
    getItem('Analytics Dashboard', '2'),
    getItem('Funding Rounds Breakdown', '3'),
    getItem('Help Us Improve', '4'),
];

const Sidenav = () => {

    return (
        <>
            <Menu 
                style={{
                    "wordWrap": "break-word"
                }}
                items={items} 
            />
        </>
    )
}

export default Sidenav;