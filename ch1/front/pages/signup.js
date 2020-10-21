import React, { useState, useCallback } from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from 'antd';

export const useInput = (initValue = null) => {
    const [value,setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    },[]);
    return [value,handler];
}

const Signup = () => {

    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);



    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onFinish= useCallback(
        ()=> {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    },
    [password,passwordCheck,term]
);



    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };

    return (
        <>
                <Form onFinish={onFinish} style={{ padding: 10 }}>
                    <Form.Item
                        label={"아이디"}
                        name={"user-id"}
                        rules={[{ required: true, message: "Please input your user ID!"}]}
                    >
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </Form.Item>
                    <Form.Item
                        label={"닉네임"}
                        name={"user-nick"}
                        rules={[{ required: true, message: "Please input your nickname!"}]}
                    >
                        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </Form.Item>
                    <Form.Item
                        label={"비밀번호"}
                        name={"user-password"}
                        rules={[{ required: true, message: "Please input your password!"}]}
                    >
                        <Input name="user-password" type={"password"} value={password} required onChange={onChangePassword} />
                    </Form.Item>
                    <Form.Item
                        label={"비밀번호 체크"}
                        name={"user-password-check"}
                    >
                        <Input name="user-password-check" type={"password"} value={passwordCheck} required onChange={onChangePasswordChk} />
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    </Form.Item>
                    <Form.Item name={"user-term"}>
                        <Checkbox name={"user-term"} checked={term} onChange={onChangeTerm}>서비스 이용 동의</Checkbox>
                        {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </Form.Item>
                </Form>

        </>
    );
};

export default Signup;