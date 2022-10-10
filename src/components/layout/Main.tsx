import { Layout, Button } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
const { Content, Footer, Sider } = Layout;

interface Props {
    children: React.ReactNode
}

const Main= ({ children }:Props) => {
    console.log(children)
    return(
        <Layout className="layout">
            <Header />
            <Layout>
                <Sider width={"288px"}>
                    <Sidenav />
                </Sider>
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main;

