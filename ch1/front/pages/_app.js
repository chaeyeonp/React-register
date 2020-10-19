import React, { useState, useCallback } from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import PropTypes from 'prop-types';


const SNS = ({Component}) => {
    return (
        <>
            <Head>
                <title>SNS</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <script src = "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"/>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

SNS.propTypes = {
    Component: PropTypes.elementType,
}

export default SNS;