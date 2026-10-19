import { useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from'./components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Pizza from './pages/Pizza.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
   return (
    <>
      <Navbar/>   
      <Routes>
        <Route path="/DESLATAM_react-full-project/" element = {<Home />} />      
        <Route path="/Pizza" element = { <Pizza />} /> 
        <Route path="/Cart" element = { <Cart/>} />
        <Route path="/Register" element = { <Register/>} />
        <Route path="/Login" element = { <Login/>} />
        <Route path="/Profile" element = { <Profile/>} />

        <Route path="*" element = { <NotFound/>} />
      </Routes>   
      <Footer />      
    </>
  )
}

export default App
