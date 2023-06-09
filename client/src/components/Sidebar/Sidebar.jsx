import './Sidebar.css'
import { MdOutlineExplore } from 'react-icons/md'
import { RiLiveFill } from 'react-icons/ri'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { SlUserFollowing } from 'react-icons/sl'
import {NavLink} from 'react-router-dom'


const Siderbar = () => {
    return (
        <div className='siderbar_container'>
            <section className="topsection">
                {/* sidebar first */}
                <span className="activebar">
                    <span className='icons_sidebar'> <AiFillHome /></span>  <span className='text_sidebar'>For You</span>
                </span>
                {/* sidebar first */}
                <span className="bar">
                    <SlUserFollowing /> Following
                </span>

                {/* sidebar first */}
                <span className="bar">
                    <MdOutlineExplore /> Explore
                </span>
                {/* sidebar first */}
                <span className="bar">
                    <RiLiveFill /> Live
                </span>


            </section>
            <section className="loginsection">
                <p className='login_slogan'>Log in to follow creators, like videos, and view comments.</p>
                <NavLink to='/login' className='login_Button_sidebar'>Login</NavLink>
            </section>
            <section className="suggestedaccount">
                <span className="suggestedtext"> suggested account</span>
                {/* sidebar first */}
                <span className="suggestedprofile">
                    <img className='suggestedimg' src=' https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e52922abe0c78a88b9dcf0d916fae4e8.jpeg?x-expires=1686499200&x-signature=EUhJ3etHKeqcLIHeHsmWHEKroDs%3D' width={50} height={50} /><span className='user_suggested_details'> <span className="suggested_username">poojs8989</span> <span className="suggesname">Pooja Bist</span></span><br /> 
                </span>
                <span className="suggestedprofile">
                    <img className='suggestedimg' src=' https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2dfe97a70f08d3a6289f583f2bf4a745.jpeg?x-expires=1686502800&x-signature=YEc%2FjP%2F9qH35UO03sQ1%2FHjYoRsY%3D' width={50} height={50} /><span className='user_suggested_details'> <span className="suggested_username">poojs8989</span> <span className="suggesname">Pooja Bist</span></span><br /> 
                </span>
            </section>
        </div>
    )
}

export default Siderbar