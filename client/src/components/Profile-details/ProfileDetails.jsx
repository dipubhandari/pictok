import React from 'react'
import './Profiledetails.css'
import { RiShareForwardLine } from 'react-icons/ri'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { FaLock } from 'react-icons/fa'
import { FiPlay } from 'react-icons/fi'
const ProfileDetails = () => {
    return (
        <div className='ProfileDetailsContainer'>
            {/* user details */}
            <div className="userprofiledetails">
                <section className="user_profile_data">
                    <span className="profile_image">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt="" />
                    </span>
                    <span className="profile_username">
                        <h2 className='user_username'>hettiedighton_ </h2>

                        <span className='followButtonred'>Follow</span>
                    </span>
                    <span className="profile_three_dots">
                        <RiShareForwardLine /><HiOutlineDotsHorizontal />
                    </span>
                </section>
                <section className="follower_count">
                    <span className="following">
                        <b className='numbers'>643 </b>
                        <span className="fflText">
                            Following
                        </span>
                    </span>
                    <span className="follower">
                        <b className='numbers'>1048 </b>
                        <span className="fflText">
                            Followers
                        </span>
                    </span>
                    <span className="likes">
                        <b className='numbers'>5238 </b>
                        <span className="fflText">
                            Likes
                        </span>
                    </span>
                </section>
                <section className="profileBio  fflText">
                    sun pagli ye jo tera swag hai wo meri fyag hai.
                </section>
            </div>

            {/* video section title */}
            <div className="videos">
                <section className="videotitle">
                    <span className="videoText">Videos</span>
                    <span className="LikedText"><FaLock />Liked</span>
                </section>
                {/* video section  */}
                <section className='videopart'>
{/* specific video */}
                    <div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div>

                    <div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div><div className="videodiv">
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/79a314be53e6ab5462a5f82a23ec9946~c5_100x100.jpeg?x-expires=1686582000&x-signature=BicKzbFyTO98d39%2BRt8lvKRxWVo%3D" alt=""
                            className='video_src' />
                        <span className="views">
                           <FiPlay/>1011
                        </span>
                        {/* <span classname='videotitle'>#viral #fyp</span> */}
                    </div>

                    {/* specific video */}
                </section>
            </div>
        </div>
    )
}

export default ProfileDetails