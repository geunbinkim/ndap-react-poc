import React from 'react';
import { Checkbox, Form, Input } from 'antd';

function ExternalHdfsTypeForm() {
    return (
        <>
            <Form.Item
                label="Name Node - 1"
                name="nameNode1"
                rules={[
                    { required: true, message: 'Name Node - 1 is Required.' },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Name Node - 2" name="nameNode2">
                <Input />
            </Form.Item>
            <Form.Item
                name="publicUse"
                valuePropName="checked"
                initialValue={false}
                wrapperCol={{ span: 16, offset: 3 }}
            >
                <Checkbox>Public Use</Checkbox>
            </Form.Item>
        </>
    );
}

export default ExternalHdfsTypeForm;
