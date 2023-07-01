import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import Register from './pages/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/home';
import Post from './pages/post';
import Profile from './pages/profile';
import Upload from './pages/upload/upload';
function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {/* homepage route */}
          <Route path='/' element={<Home />}></Route>
          {/* login routes */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* fouyou page routes */}
          <Route path='/home' element={<Home />}></Route>
          {/* routes for upload videos */}
          <Route path='/post' element={(isLoggedIn) ? <Upload /> : <Login />}></Route>
          <Route path='/upload' element={(isLoggedIn) ? <Upload /> : <Login />}></Route>
          <Route path='/foryou' element={<Home />} />
          {/* user profile page */}
          <Route path='/profile' element={<Profile />}></Route>
          {/* post details routes */}
          <Route path='/foryou/username/postid' element={<Post />}></Route>
         
          <Route path='*' elment={<img src='https://png.pngtree.com/png-vector/20210827/ourmid/pngtree-error-404-page-not-found-png-image_3832696.jpg' />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
