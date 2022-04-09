import React, {useCallback, useState} from 'react';
import {Button, Form, Input} from "antd";
import ndap_bi from '../../assets/login_bi.png';

const LoginForm = () => {
    const [submitLoading, setSubmitLoading] = useState(false);

    const onLogin = () => {
        setSubmitLoading(true);

        fetch('http://localhost:8001/security/login', {
            method : 'POST',
            body : JSON.stringify({
                userName : id,
                password : password
            })
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((e) => {
                console.error(`error : !!!`, e);
            })
            .finally(() => {
                setSubmitLoading(false);
            })
        ;
    };

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    return (
        <Form onFinish={onLogin}>
            <Form.Item>
                <img src={ndap_bi}/>
            </Form.Item>
            <Form.Item
                name="username"
            >
                <Input placeholder="User ID" onChange={onChangeId} value={id} />
            </Form.Item>
            <Form.Item
                name="password"
            >
                <Input.Password placeholder="Password" onChange={onChangePassword} value={password} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={submitLoading}>Login</Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;