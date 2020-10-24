import React from 'react';
import Icon from "antd/lib/icon";
import {Avatar, Button, Card} from "antd";

const PostCard= () => {
    return(
        <Card
            key={+c.createdAt}
            cover={c.User.img && <img alt="example" src={c.User.img}/>}
            actions={[
                <Icon type="edit" key = "edit"/>,
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
    )
}

export default PostCard;
