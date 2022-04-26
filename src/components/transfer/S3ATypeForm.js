import React from 'react';
import { Checkbox, Form, Input } from 'antd';

function S3ATypeForm() {
    return (
        <>
            <Form.Item
                label="Access Key"
                name="accessKey"
                rules={[
                    {
                        required: true,
                        message: 'Access Key is Required',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Secret Key"
                name="secretKey"
                rules={[
                    {
                        required: true,
                        message: 'Access Key is Required',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Bucket Name"
                name="bucketName"
                rules={[
                    {
                        required: true,
                        message: 'Bucket Name is Required',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="publicUse"
                initialValue={false}
                valuePropName="checked"
                wrapperCol={{ offset: 3, span: 16 }}
            >
                <Checkbox>Public Use</Checkbox>
            </Form.Item>
        </>
    );
}

export default S3ATypeForm;
