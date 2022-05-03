import React from 'react';
import { Layout, Menu, Popover } from 'antd';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { BellFilled } from '@ant-design/icons';
import Dashboard from './routers/Dashboard';
import ImportJobs from './routers/transfer/ImportJobs';
import Connections from './routers/transfer/Connections';
import ConnectionEditor from './routers/transfer/ConnectionEditor';
import Notification from './components/Notification';

function App() {
    const { Header, Content } = Layout;
    return (
        <Layout className="layout">
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ display: 'inline-block' }}
                >
                    <Menu.Item key="dashboard">
                        <Link to="/dashboard" replace>
                            Dashboard
                        </Link>
                    </Menu.Item>
                    <Menu.SubMenu key="SubMenu" title="Data Transfer">
                        <Menu.Item key="connections">
                            <Link to="/connections" replace>
                                Connections
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="importJobs">
                            <Link to="/importJobs" title="Import Jobs" replace>
                                Import Jobs
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="exportJobs">Export Jobs</Menu.Item>
                        <Menu.Item key="distcpJobs">DistCp Jobs</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
                <div className="notification">
                    <Notification />
                </div>
            </Header>
            <Content className="site-layout">
                <div className="site-layout-background">
                    <Routes>
                        <Route
                            path="/dashboard"
                            exact
                            element={<Dashboard />}
                        />
                        <Route
                            path="/connections"
                            exact
                            element={<Connections />}
                        />
                        <Route
                            path="/connection"
                            exact
                            element={<ConnectionEditor />}
                        >
                            <Route
                                path=":id"
                                exact
                                element={<ConnectionEditor />}
                            />
                        </Route>
                        <Route
                            path="/importJobs"
                            exact
                            element={<ImportJobs />}
                        />
                    </Routes>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
