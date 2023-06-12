import { NavLink } from 'react-router-dom'
import './header.css'; import Logout from '../Popup/Logout'
import { FiSearch, FiSend } from 'react-icons/fi';
import { MdCircleNotifications } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useSelector } from 'react-redux';
const Header = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    console.log(isLoggedIn)
    return (
        <div className='header'>
            <NavLink to='/foryou' className="leftHeader">
                <img src="https://static.vecteezy.com/system/resources/previews/017/221/712/original/tiktok-icon-transparent-free-png.png" width={50} height={50} alt="logo" />PICTOK
            </NavLink>
            <section className="middleHeader">
                <input type="text" placeholder='Search' />
                <span ><FiSearch /></span>
            </section> <section className="rightHeader">
                <NavLink to='/post' className='upload'> <AiOutlinePlus /> Upload</NavLink>
                {/* // if user not logged in show login button else show profile picture */}
                {
                    (isLoggedIn) ?
                        <section className='sendNotificationsection'>

                            <FiSend className='header_icons' />
                            <MdCircleNotifications className='header_icons' />
                            {/* Profile Icon When Clicked PopupLogout */}
                            <Logout />
                        </section>

                        :
                        <section>
                            <NavLink to='/login' className='loginButton'>Login</NavLink>
                            <span className='three_dot'><BsThreeDotsVertical /> </span>
                        </section>
                }

            </section>
        </div >
    )
}

export default Header