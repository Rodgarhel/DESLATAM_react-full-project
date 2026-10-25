import './App.css'
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from'./components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Pizza from './pages/Pizza.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';
import { GlobalContext } from './context/GlobalContext.jsx';

function App() {
  const { token } = useContext(GlobalContext);
  console.log("TOKEN:", token);
   return (
    <>
      <Navbar/>   
      <Routes>
        <Route path="/" element = {<Home />} />      
        <Route path="/Pizza/:id" element = { <Pizza />} /> 
        <Route path="/Cart" element = { <Cart/>} />
        <Route path="/Register" element = { !token ? <Register/> : <Navigate to="/"/>} />
        <Route path="/Login" element = { !token ? <Login/> : <Navigate to="/"/>} />
        <Route path="/Profile" element = { token ? <Profile/> : <Navigate to="/"/>} />

        <Route path="*" element = { <NotFound/>} />
      </Routes>   
      <Footer />      
    </>
  )
}

export default App
