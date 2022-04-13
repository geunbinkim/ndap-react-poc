import React from 'react';
import {Layout} from "antd";


const {Header, Footer, Sider ,Content} = Layout;

const LoginLayout = ({ children }) => {
    return (
        <Layout>
            <Content>{children}</Content>
        </Layout>
    );
};

export default LoginLayout;