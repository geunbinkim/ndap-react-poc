import React from 'react';
import { Form, Input } from 'antd';

function DatabaseTypeForm() {
    return (
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
            <Form.Item label="Driver Class" name="driverClass">
                <Input />
            </Form.Item>
        </>
    );
}

export default DatabaseTypeForm;
