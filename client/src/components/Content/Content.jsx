
import './Content.css'
import React from 'react'
import { IoIosShareAlt } from 'react-icons/io'
import { FaCommentDots } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BsFillBookmarkFill } from 'react-icons/bs'
const Content = () => {
  return (
    <div className='content_container'>

      <section className="profile">
        <img
          width={79}
          height={79} src="https://media.istockphoto.com/id/1170879651/photo/little-sad-girl-pensive-looking-through-the-window-glass-with-a-lot-of-raindrops-sadness.jpg?s=2048x2048&w=is&k=20&c=b2I7tVPNPuU-BiW-amqdaqZ-MwJ2kJP1RBiMHm0F5rE="
          alt=""
          className="userprofilepic"
        />
      </section>

      <section className="content_details">
        <section className="user"><h5 className='name'>Sumita Sharma</h5><h6 className="username">sumitrasharma</h6></section>
        <section className="desc">
          Hello Guys.My first post in pictok <span className="hashtag"> #viral #foryou</span>
        </section>
        <section className="foryoupost"> <section className="image"><img width={400} height={660}
          src='https://e0.pxfuel.com/wallpapers/385/888/desktop-wallpaper-beutiful-girl-beautiful-girl-beautiful-female-cute-baby-cute-girl-dark-girl-black-background.jpg' /></section><section className="postfooter"><span className="likes"><MdFavorite className='posticons'/>
            <br />30M</span><span className="comments"><FaCommentDots  className='posticons'/>
              <br />20L</span><span className="comments"><BsFillBookmarkFill  className='posticons' />
              <br />40k</span><span className=""><IoIosShareAlt  className='posticons'/>
              <br/>1011</span></section></section>
      </section>

      <section className="follow">
        <span className='followButton'>Follow</span>

      </section>

    </div>
  )
}

export default Content