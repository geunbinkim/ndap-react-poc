import React from 'react';
import { Form, Input } from 'antd';

function ExternalNdapTypeForm() {
    return (
        <>
            <Form.Item
                name="connectionUrl"
                label="External NDAP URL"
                rules={[
                    {
                        required: true,
                        message: 'External NDAP URL is Required',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="userName"
                label="User Name"
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
                name="password"
                label="Password"
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
                name="applicationKey"
                label="Application Key"
                rules={[
                    {
                        required: true,
                        message: 'Application Key is Required',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
        </>
    );
}

export default ExternalNdapTypeForm;
