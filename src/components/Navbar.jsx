import { NavLink } from 'react-router-dom'

import {useCart} from '../context/CartContext.jsx';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';

function Navbar() {
    const { token, setToken } = useContext(GlobalContext);
    const { total } = useCart();       

    return (
        <nav className="navbar">            
            <div className="navButtons">
                <h3> Pizzería Mamma Mia!</h3>
                <NavLink to="/">
                    {({ isActive }) => (
                        <button className={isActive ? "btnActive" : "btnNav"}>
                        🍕 Home</button>
                    )}
                </NavLink>     
                {token && <NavLink to="/Profile">
                    {({ isActive }) => (
                        <button className={isActive ? "btnActive" : "btnNav"}>
                        🔓Profile </button>)}
                </NavLink> }
                {token && (<button className="btnNav" 
                onClick={()=>setToken(false)}>
                    🔒Logout</button>)}  

                {!token && <NavLink to="/Login">
                {({ isActive }) => (
                    <button className={isActive ? "btnActive" : "btnNav"}>
                    🔐Login</button>)}
                </NavLink> }
                {!token && <NavLink to="/Register">
                {({ isActive }) => (
                    <button className={isActive ? "btnActive" : "btnNav"}>
                    🔐Register</button>)}
                </NavLink>}                                 
                
            </div>
            <div className="cart">
                <NavLink to="/Cart">
                    <button className="btnCart">🛒 Total: ${total.toLocaleString()} </button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;