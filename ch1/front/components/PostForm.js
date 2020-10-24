import React from 'react';
import {Button, Form, Input} from "antd";

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



const PostForm = () => {

    return (
        <Form encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="What happened today?"/>
            <div>
                <input type="file" multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button
                    on type="primary" style={{float: 'right'}} htmlType="submit">짹</Button>
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

        </Form>
    )
}

export default PostForm;