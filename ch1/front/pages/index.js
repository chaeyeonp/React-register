import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import {Button, Form, Input, Card, Avatar} from "antd";
import Icon from "antd/lib/icon";


const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '박채연',
            content: '첫번째 게시글',
            img: '',

        },
        createdAt: undefined
    }]
}


const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <Form encType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder="What happened today?"/>
                <div>
                    <input type="file" multiple hidden/>
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float: 'right'}} htmlType="submit">짹</Button>
                </div>
                <br/>
                <div>


                    {dummy.imagePaths.map((c, v) => {
                        return (
                            <div key={v} style={{display: 'inline-block'}}>
                                <img src={'http://localhost:3000/' + v} style={{width: '200px'}} alt={v}/>


                            </div>
                        );
                    })}
                </div>

            </Form>}

            {dummy.mainPosts.map((c, v) => {
                return (
                    <Card
                        key={+c.createdAt}
                        cover={c.User.img && <img alt="example" src={c.User.img}/>}
                        actions={[
                            <Icon type="login" key = "login" />,
                            <Icon type="heart" key="heart"/>,
                            <Icon type="message" key="message"/>,
                            <Icon type="ellipsis" key="ellipsis"/>,
                        ]}
                        extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta
                            avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                            title={c.User.nickname}
                            description={c.User.content}
                        />
                    </Card>
                );


            })}
        </div>
    );
};

export default Home;