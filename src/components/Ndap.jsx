import React from 'react';
import 'antd/dist/antd.css';
import LoginForm from "./LoginForm";
import LoginLayout from "../layouts/LoginLayout";
import axios from 'axios';
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "./Dashboard";
import Top from "./Top";
import Bottom from "./Bottom";
import Left from "./Left";
import {Layout} from "antd";

axios.defaults.baseURL = 'http://localhost:8001';

const Ndap = () => {
    const { Content, Sider, Header, Footer } = Layout;
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Content>
                                <LoginForm />
                            </Content>
                        </Layout>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <DefaultLayout Top={<Top/>} Bottom={<Bottom/>}>
                            <Dashboard />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </div>
    );
};

export default Ndap;