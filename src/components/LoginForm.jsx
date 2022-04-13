import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, Form, Input, message} from "antd";
import axios from 'axios';
import ndap_bi from '../../public/login_bi.png';
import LoginLayout from "../layouts/LoginLayout";

const LoginForm = () => {
    const [submitLoading, setSubmitLoading] = useState(false);
    const [inputs, setInputs] = useState({
        userName : '',
        password : ''
    });

    const { userName, password } = inputs;
    const userNameRef = useRef();

    const onLogin = () => {
        setSubmitLoading(true);

        axios.post('/login', {
            userName : userName,
            password : password
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            message.error(err.response.data);
        }).then(() => {
            setSubmitLoading(false);
        });
    };

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }, [inputs]);

    useEffect(() => {
        userNameRef.current.focus();
    }, [userName])

    return (
        <div style={{margin:'0 auto', padding:'100px 20px 20px 20px', maxWidth:600}}>
            <div style={{textAlign:'center',
                marginBottom:15,
                paddingRight:35}}>
                <img src={ndap_bi}/>
            </div>
            <Form onFinish={onLogin}>
                <Form.Item
                    name="userName"
                >
                    <Input name="userName" placeholder="User Name" onChange={onChange} value={userName} ref={userNameRef} />
                </Form.Item>
                <Form.Item
                    name="password"
                >
                    <Input.Password name="password" placeholder="Password" onChange={onChange} value={password} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={submitLoading} block>Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;