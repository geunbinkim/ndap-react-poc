import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import DatabaseTypeForm from '../../components/transfer/DatabaseTypeForm';
import SSHTypeForm from '../../components/transfer/SSHTypeForm';
import S3ATypeForm from '../../components/transfer/S3ATypeForm';
import ExternalHdfsTypeForm from '../../components/transfer/ExternalHdfsTypeForm';
import ExternalNdapTypeForm from '../../components/transfer/ExternalNdapTypeForm';

function ConnectionEditor() {
    const navigate = useNavigate();
    const param = useParams();
    const { Option } = Select;
    const [connectionType, setConnectionType] = useState('DATABASE');
    const onCancel = () => {
        navigate('/connections');
    };

    const onSubmit = (values) => {
        console.log(values);
    };

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
                onFinish={onSubmit}
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
                        DATABASE: <DatabaseTypeForm />,
                        SSH: <SSHTypeForm />,
                        S3A: <S3ATypeForm />,
                        EXTERNAL_HDFS: <ExternalHdfsTypeForm />,
                        EXTERNAL_NDAP: <ExternalNdapTypeForm />,
                    }[connectionType]
                }
                <Form.Item
                    name="testConnection"
                    wrapperCol={{ offset: 3, span: 16 }}
                    initialValue
                    valuePropName="checked"
                >
                    <Checkbox>Test Connection</Checkbox>
                </Form.Item>
                <hr />
                <Form.Item>
                    <Button
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
