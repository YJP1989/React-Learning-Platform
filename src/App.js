import './App.css';
import Home from './component/GeneralPages/Home';
import Navbar from './component/GeneralPages/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllBooks from './component/Books/AllBooks';
import Groups from './component/GroupChat/Groups';
import About from './component/GeneralPages/About';
import Contact from './component/GeneralPages/Contact';
import MyLibrary from './component/Personal/MyLibrary';
import Login from './component/Personal/Login';
import Register from './component/Personal/Register';
import Chat from './component/GroupChat/Chat';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<AllBooks/>} />
        <Route path='/groups' element={<Groups/>} />
        <Route path='/chat/:id' element={<Chat/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my_library' element={<MyLibrary/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;