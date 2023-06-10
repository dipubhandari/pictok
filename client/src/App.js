import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import Register from './pages/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/home';
import Chat from './pages/chat'
import Post from './pages/post';
import Profile from './pages/profile';
function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {/* homepage route */}
          <Route path='/' element={<Login />}></Route>
          {/* login routes */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* fouyou page routes */}
          <Route path='/home' element={<Home />}></Route>
          {/* user profile page */}
          <Route path='/profile' element={<Profile />}></Route>
          {/* post details routes */}
          <Route path='/foryou/username/postid' element={<Post />}></Route>
          {/* chat routes */}
          <Route path='/chat' element={<Chat />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
