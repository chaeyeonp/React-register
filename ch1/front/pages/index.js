import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import AppLayout from "../components/AppLayout";

import {Button, Form, Input, Card, Avatar} from "antd";
import Icon from "antd/lib/icon";
import PostForm from "../components/PostForm";


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
            {dummy.isLoggedIn && <PostForm/>}

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