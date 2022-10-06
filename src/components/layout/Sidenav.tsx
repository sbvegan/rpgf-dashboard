import { Menu } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const items = [
    { 
        path: "/",
        label: 'item 1',
        // icon        
    }, 
    { 
        path: "/2",
        label: 'item 2',
        // icon        
    }, 
    { 
        path: "/3",
        label: 'item 3',
        // icon        
    }, 
    { 
        path: "/4",
        label: 'item 4',
        // icon        
    }, 
    { 
        path: "/5",
        label: 'item 5',
        // icon        
    }, 
    { 
        path: "/",
        label: 'item 6',
        // icon        
    }, 
].map((item, index) => {
    return {
        key: index,
        label: <Link to={item.path}>{item.label}</Link>
        // icon: item.icon
    }
});

const Sidenav = () => {

    return (
        <>
            <div style={{height: "64px"}}>
                {/* <img src={logo} alt="logo" /> */}
                <span style={{color:"white"}}>RPGF Dashboard</span>
            </div>
            <Menu items={items} />
        </>
    )
}

export default Sidenav;