import { useState } from 'react';

import Cart from './components/Cart.jsx';
import Navbar from'./components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Pizza from './components/Pizza.jsx';
// import UserPage from './components/UserPage.jsx'
import './App.css'




function App() {
   return (
    <>
      <Navbar/>      
     {/* <UserPage />*/}
      <Home />
      <Pizza /> 
      {/* <Cart/>*/}
      <Footer />
    </>
  )
}

export default App
