import React, {useCallback} from 'react';
import {Button, Form, Input, Select} from "antd";
import {useNavigate, useParams} from "react-router-dom";

const ImportJob = () => {
    const { id } = useParams();
    const { Option } = Select;
    const navi = useNavigate();
    const onClick = useCallback((e) => {
        navi('/importjobs', {replace : false});
    });
    const onFinish = useCallback((e) => {

    });
    return (
        <>
            <h1>Import Job | {id ? 'Edit' : 'Create'}</h1>
            <Button onClick={onClick}>Back to List</Button>

            <Form onFinish={onFinish}>
                <Form.Item label="Name" name="name" rules={[{required : true, message : 'Name is Required!'}]}>
                    <Input name="name" placeholder="Insert new Import Job name." />
                </Form.Item>
                <Form.Item>
                    <Select placeholder="select...">
                        <Option></Option>
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

export default ImportJob;