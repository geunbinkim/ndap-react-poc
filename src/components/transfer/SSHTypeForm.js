import React, { useState } from 'react';
import { Form, Input, Radio } from 'antd';

function SSHTypeForm() {
    const [enabledByPassword, setEnabledByPassword] = useState(true);
    const changeAuthentication = (e) => {
        setEnabledByPassword(e.target.value);
    };
    return (
        <>
            <Form.Item
                label="Host"
                name="host"
                rules={[
                    {
                        required: true,
                        message: 'Host is Required',
                    },
                ]}
            >
                <Input placeholder="Insert enter-separated host names list" />
            </Form.Item>
            <Form.Item
                label="Port"
                name="port"
                initialValue="22"
                rules={[
                    {
                        required: true,
                        message: 'Port is Required',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Authentication"
                name="enabledByPassword"
                initialValue
                rules={[
                    {
                        required: true,
                        message: 'Authentication is Required',
                    },
                ]}
            >
                <Radio.Group onChange={changeAuthentication}>
                    <Radio value>by Password</Radio>
                    <Radio value={false}>by Private Key</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="User Name"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'User Name is Required',
                    },
                ]}
            >
                <Input placeholder="Insert a User Name." />
            </Form.Item>
            {enabledByPassword ? (
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
                    <Input.Password placeholder="This value is not visible for security issue" />
                </Form.Item>
            ) : (
                <>
                    <Form.Item
                        label="Private Key"
                        name="privateKey"
                        rules={[
                            {
                                required: true,
                                message: 'Private Key is Required',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Passphrase"
                        name="passphrase"
                        rules={[
                            {
                                required: true,
                                message: 'Passphrase is Required',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </>
            )}
        </>
    );
}

export default SSHTypeForm;
