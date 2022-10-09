import { Layout, Menu, Typography } from "antd";
import logo from "../../assets/images/optimism-wordmark-small/OPTIMISM.png";
const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = () => {
    return(
        <AntHeader className="header">
            <img src={logo} alt="The Optimism Logo, text that says 'Optimism' in red italics" />
            <Text
                className="header-logo-text"
                italic={true}
                strong={true}
            >
                RPGF
            </Text>
            
            <Menu theme="dark" mode="horizontal" />
        </AntHeader>
    );
}

export default Header;

