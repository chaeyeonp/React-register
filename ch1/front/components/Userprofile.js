import {Button, Card, List} from "antd";
import Icon from "@ant-design/icons";

const Userprofile = () => {
    return (
        <List
            style = {{marginBottom: '20px'}}
            grid = {{gutter:4, xs:2, md:3}}
            size = "small"
            header={<div>팔로워 목록</div>}
            loadMore={<Button style = {{width: '100%'}}>더보기</Button>}
            bordered
            dataSource = {['qkr','co','dus']}
            renderItem = {item => (
                <List.Item style = {{marginTop:'20px'}}>
                    <Card actions = {[<Icon type = "stop"/>]}><Card.Meta description = {item}/></Card>
                </List.Item>
            )}/>
    );
};


export default Userprofile



