import React from 'react';
import Icon from "antd/lib/icon";
import {Avatar, Button, Card} from "antd";
import CheckOutlined from '@ant-design/icons/CheckOutlined';


const PostCard= ({post}) => {
    return(
        <Card
            key={+post.createdAt}
            cover={post.User.img && <img alt="example" src={post.User.img}/>}
            actions={[
                <Icon type="outlined" theme="outlined" />,
                <Icon type="heart" key="heart"/>,
                <Icon type="message" key="message"/>,
                <Icon type="ellipsis" key="ellipsis"/>,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.User.content}
            />
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img : PropTypes.string,
        createdAt: PropTypes.object,
    }),
}



export default PostCard;
