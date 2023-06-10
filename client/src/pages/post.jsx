//user post details
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'
import './post.css'
import { RxCross2 } from 'react-icons/rx';
import { FiVolumeX } from 'react-icons/fi'
import { BsFlag, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import React from 'react'
import { IoIosShareAlt } from 'react-icons/io'
import { FaCommentDots } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoWhatsapp } from 'react-icons/bi'

const Post = () => {
  return (
    <div className='postcontainer'>
      <section className="foryouleftpost">
        <div className="crossicondiv">
          <Link to='/home'>
            <RxCross2 className='crossicon' />
          </Link>

        </div>
        <div className="foryoucontent">
          <img src="https://cdn.pixabay.com/photo/2016/07/13/11/49/vietnam-1514246_1280.jpg"
            height={100}
            width={100} autoPlay='on' className='video'></img>
        </div>
        <div className="foryouscrollbar">
          <span className="iconreport"><BsFlag />Report</span>
          <span className="iconscroll"><AiFillCaretDown /></span>
          <span className="iconvolumedown"><FiVolumeX /></span>
        </div>
      </section>
      <section className="foryourightpost">

        <section className="toprightdet">
          <section className="user"> <img
            width={79}
            height={79} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
            alt=""
            className="userprofilepic"
          /><h5 className='name'>Jeewan<h6 className="username">@sumitrasharma</h6></h5><section className="follow">
              <span className='followButton'>Follow</span>

            </section><br /></section>
          <section className="desc"><br /><br />
            Hello Guys.My first post in pictok <span className="hashtag"><br /><br /> #viral #foryou</span>
          </section>


          <span className="user_footer">
            <section className="like_comment_favourite">
              <span className="post"><MdFavorite /> 1000m</span>
              <span className="post"><FaCommentDots />10m</span>
              <span className="post"><BsFillBookmarkFill />404k</span>

            </section>
            <section className="socialmedia">
              <span className="facebook_icon"><FaFacebookF /></span>
              <span className="messenger_icon"><FaFacebookMessenger /></span>
              <span className="youtube_icon"><BsYoutube /></span>
              <span className="whatsapp_icon"><BsWhatsapp /></span>
              <span className="share_icon"><IoIosShareAlt /></span>
            </section>
          </span>

          <section className="link">
            <span className="videourl">https://react-icons.github.io/react-icons/search?q=what</span> <span className="link_button">
              CopyLink
            </span>
          </section>
        </section>

        {/* // comment section */}
        <section className="bottomdetails">
          {/* first commnet */}
          <section className='comment'>
            <section> <img
              width={59}
              height={59} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
              alt=""
              className="commentuserprofile"
            /> </section>
            <section className="commentuserdetail">
              <section className="user"><h5 className='name'>kiran000</h5></section>
              <section className="desc">
                Hello Guys.My first post in pictok
              </section>
              <section className="commentdate">
                <span className='date'>5-5</span><span className="reply">Reply</span>
              </section>
            </section>
            <span className="likecomment"><MdFavorite /> <br />1</span>
          </section>

          {/* first commnet */}
          <section className='comment'>
            <section> <img
              width={59}
              height={59} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
              alt=""
              className="commentuserprofile"
            /> </section>
            <section className="commentuserdetail">
              <section className="user"><h5 className='name'>kiran000</h5></section>
              <section className="desc">
                Hello Guys.My first post in pictok
              </section>
              <section className="commentdate">
                <span className='date'>5-5</span><span className="reply">Reply</span>
              </section>
            </section>
            <span className="likecomment"><MdFavorite /> <br />1</span>
          </section>
          {/* first commnet */}
          <section className='comment'>
            <section> <img
              width={59}
              height={59} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
              alt=""
              className="commentuserprofile"
            /> </section>
            <section className="commentuserdetail">
              <section className="user"><h5 className='name'>kiran000</h5></section>
              <section className="desc">
                Hello Guys.My first post in pictok
              </section>
              <section className="commentdate">
                <span className='date'>5-5</span><span className="reply">Reply</span>
              </section>
            </section>
            <span className="likecomment"><MdFavorite /> <br />1</span>
          </section>

          {/* first commnet */}
          <section className='comment'>
            <section> <img
              width={59}
              height={59} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
              alt=""
              className="commentuserprofile"
            /> </section>
            <section className="commentuserdetail">
              <section className="user"><h5 className='name'>kiran000</h5></section>
              <section className="desc">
                Hello Guys.My first post in pictok
              </section>
              <section className="commentdate">
                <span className='date'>5-5</span><span className="reply">Reply</span>
              </section>
            </section>
            <span className="likecomment"><MdFavorite /> <br />1</span>
          </section>

          {/* first commnet */}
          <section className='comment'>
            <section> <img
              width={59}
              height={59} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
              alt=""
              className="commentuserprofile"
            /> </section>
            <section className="commentuserdetail">
              <section className="user"><h5 className='name'>kiran000</h5></section>
              <section className="desc">
                Hello Guys.My first post in pictok
              </section>
              <section className="commentdate">
                <span className='date'>5-5</span><span className="reply">Reply</span>
              </section>
            </section>
            <span className="likecomment"><MdFavorite /> <br />1</span>
          </section>
        </section>

        {/* comment input field */}
        <section className="comment_input">

          <input
            className='comment_input_field'
            style={
              {
                backgroundColor: 'rgb(148, 148, 148,0.1)',
                border: '1px solid rgb(148, 148, 148,0.4)', borderRadius: '10px',
                width: '550px', padding: "20px",marginBottom:'20px'
              }
            }
            type="text"
            placeholder='Add comment' />
          <h2 className='comment_button'><AiOutlineSend /></h2>
        </section>

        {/* comment sectin ends */}
      </section>

    </div>
  )
}

export default Post