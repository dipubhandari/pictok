import { useEffect, useState } from 'react';
import './home.css';
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { serverURL } from '../server'
import { setLoginDetails } from '../redux/userslice';
import { setChatDetails } from '../redux/chatSlice';
import { useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

function Home(props) {
   
    return (
        <>
            <main className='homeContainer_homepage'>
                {/* header */}
                <section className='header'>
                    <Header />
                </section>
                {/* header ends here */}
                {/* main content */}
                <section className='main_content'>
                    {/*  */}
                    <section className='left_content'>
                        <Sidebar />
                    </section>
                    <section className='content'>
                        <Content />
                        <Content />
                        <Content />

                    </section>
                </section>
                {/* content ends here */}

            </main>
        </>

    );
}

export default Home;