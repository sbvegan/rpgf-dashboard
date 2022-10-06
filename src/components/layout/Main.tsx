import { Layout, Menu, Drawer } from "antd";
import Sidenav from "./Sidenav";

const { Header, Content, Footer, Sider } = Layout;

interface Props {
    children: React.ReactNode
}

const Main= ({ children }:Props) => {
    console.log(children)
    return(
        <Layout>
            <Sider>
                <Sidenav />
            </Sider>
            <Layout>
                {/* todo: add header */}
                <Header />
                <Content>
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default Main;