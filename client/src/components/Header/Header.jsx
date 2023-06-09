import React from 'react'
import './header.css'
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Header = () => {
    return (
        <div className='header'>
            <section className="leftHeader">
                <img src="https://static.vecteezy.com/system/resources/previews/017/221/712/original/tiktok-icon-transparent-free-png.png" width={90} height={90} alt="logo" />PICTOK
            </section>
            <section className="middleHeader">
                <input type="text" placeholder='Search' />
                <span ><FiSearch /></span>
            </section> <section className="rightHeader">
                <button className='upload'> <AiOutlinePlus /> Upload</button>
                <span className='loginButton'>Login</span>
                <span className='three_dot'><BsThreeDotsVertical/></span>
            </section>
        </div>
    )
}

export default Header