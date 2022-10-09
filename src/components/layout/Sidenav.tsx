import { Menu } from "antd";
import { Link } from "react-router-dom";

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
            <Menu items={items} />
        </>
    )
}

export default Sidenav;