import React from 'react';
import {Layout} from "antd";


const {Header, Footer, Sider ,Content} = Layout;

const DefaultLayout = ({ Top, Bottom, Left, children}) => {
    if(Left){
        return (
            <Layout>
                <Header style={{ background : 'white'}}>{Top}</Header>
                <Layout>
                    <Sider style={{ background : 'white'}}>{Left}</Sider>
                    <Content style={{ background : 'white'}}>{children}</Content>
                </Layout>
                <Footer style={{ background : 'white'}}>{Bottom}</Footer>
            </Layout>
        );
    }
    return (
        <Layout>
            <Header style={{ background : 'white'}}>{Top}</Header>
            <Layout>
                <Content style={{ background : 'white'}}>{children}</Content>
            </Layout>
            <Footer style={{ background : 'white'}}>{Bottom}</Footer>
        </Layout>
    );
};

export default DefaultLayout;