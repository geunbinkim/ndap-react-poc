import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';

function ConnectionEditor() {
    const navigate = useNavigate();
    const param = useParams();
    const { Option } = Select;
    const [connectionType, setConnectionType] = useState('DATABASE');
    const onCancel = () => {
        navigate('/connections');
    };

    useEffect(() => {
        console.log(connectionType);
    }, [connectionType]);

    return (
        <>
            <h1>Connection | {param.id ? 'Edit' : 'Create'}</h1>
            <hr />
            <Form
                name="basic"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="connectionName"
                    rules={[
                        {
                            required: true,
                            message: 'Connection Name is Required',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Type"
                    name="connectionType"
                    initialValue="DATABASE"
                    rules={[
                        {
                            required: true,
                            message: 'Connection Type is Required',
                        },
                    ]}
                >
                    <Select value={connectionType} onChange={setConnectionType}>
                        <Option value="DATABASE">Database</Option>
                        <Option value="SSH">SSH</Option>
                        <Option value="S3A">S3A</Option>
                        <Option value="EXTERNAL_HDFS">External HDFS</Option>
                        <Option value="EXTERNAL_NDAP">External NDAP</Option>
                    </Select>
                </Form.Item>
                <hr />
                {
                    {
                        DATABASE: (
                            <>
                                <Form.Item
                                    label="JDBC URL"
                                    name="jdbcUrl"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'JDBC URL is Required',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="User Name"
                                    name="userName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'User Name is Required',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Password is Required',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    label="Driver Class"
                                    name="driverClass"
                                >
                                    <Input />
                                </Form.Item>
                            </>
                        ),
                        SSH: (
                            <>
                                <h1>test2</h1>
                                <h1>test2</h1>
                                <h1>test2</h1>
                            </>
                        ),
                        S3A: (
                            <>
                                <h1>test3</h1>
                                <h1>test3</h1>
                            </>
                        ),
                        EXTERNAL_HDFS: (
                            <>
                                <h1>test4</h1>
                                <h1>test4</h1>
                            </>
                        ),
                        EXTERNAL_NDAP: (
                            <>
                                <h1>test5</h1>
                                <h1>test5</h1>
                            </>
                        ),
                    }[connectionType]
                }
                <hr />
                <Form.Item>
                    <Button
                        style={{ display: 'inline-block' }}
                        type="default"
                        danger
                        htmlType="button"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default ConnectionEditor;
