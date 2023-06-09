import { useEffect, useState } from 'react';
import './home.css';
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { serverURL } from '../server'
import { setLoginDetails } from '../redux/userslice';
import { setChatDetails } from '../redux/chatSlice';
import { io } from 'socket.io-client'
import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header';


function Home(props) {

    return (
        <>
            <main className='homeContainer_homepage'>
                {/* header */}
                <section>
                    <Header />
                </section>

            </main>
        </>

    );
}

export default Home;