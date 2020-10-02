import React, {useState} from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Form, Input, Checkbox,Button} from 'antd';

const Signup = () => {

    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState('');

    const onSubmit = () => {
        setId(e.target.value);
    };
    const onChangeId = () => {
        setId(e.target.value);
    };
    const onChangeNick = () => {
        setNick(e.target.value);
    };
    const onChangePassword = () => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = () => {
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = () => {
        setTerm(e.target.value);
    };

    return <>
        <Head>
            <title>SNS</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"/>
        </Head>
        <AppLayout>
            <Form onSubmit = {onSubmit} style = {{padding:10}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name = "user-id" value = {id} required onChange = {onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">아이디</label>
                    <br/>
                    <Input name = "user-nick" value = {nick} required onChange = {onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-pass">비밀번호</label>
                    <br/>
                    <Input name = "user-pass" value = {password} required onChange = {onChangePassword}/>
                </div>

                <div>
                    <label htmlFor="user-pass-chk">아이디</label>
                    <br/>
                    <Input name = "user-pass-chk" value = {passwordCheck} required onChange = {onChangePasswordChk}/>
                </div>

                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
                        약관에 동의합니다.
                    </Checkbox>
                </div>

                <div>
                    <Button type = "primary" htmlType = "submit">가입하기</Button>
                </div>


            </Form>
        </AppLayout>
    </>
};

export default Signup;