import React, {useCallback, useState} from 'react';
import {Button, Form, Input} from "antd";
import ndap_bi from '../../assets/login_bi.png';

const LoginForm = () => {
    const onLogin = () => {

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
            <img src={ndap_bi}/>
            <br/>
            <Input placeholder="User ID" onChange={onChangeId} value={id} />
            <br/>
            <Input placeholder="Password" onChange={onChangePassword} value={password} />
            <br/>
            <Button type="primary">Login</Button>
        </Form>
    );
};

export default LoginForm;