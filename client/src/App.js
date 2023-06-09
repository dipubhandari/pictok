import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import Register from './pages/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/home';
import Chat from './pages/chat'
function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
 
 
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
