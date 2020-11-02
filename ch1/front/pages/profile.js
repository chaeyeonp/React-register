import React from 'react';
import AppLayout from "../components/AppLayout";
import {Button, List, Input, Form, Card} from "antd";
import Icon from "@ant-design/icons";
import NickNameForm from "../components/NickNameForm";
import Userprofile from "../components/Userprofile";

const Profile = () => {
    return (

        <div>
           <NickNameForm/>
           <Userprofile/>

        </div>

    );
};


export default Profile;