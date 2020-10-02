import React,{useState, useEffect} from 'react';
import Link from 'next/link';


const Home = () => {
    return(
        <>
        <Link href = "/about"><a>About</a></Link>
        <div>Hello, Next</div>
        </>
            );
};

export default Home;