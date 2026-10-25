import { NavLink, Link } from 'react-router-dom'

import {useCart} from '../context/CartContext.jsx';

function Navbar() {
    const { total } = useCart();       

    return (
        <nav className="navbar">            
            <div className="navButtons">
                <h3> Pizzería Mamma Mia!</h3>
                <NavLink to="/DESLATAM_react-full-project/">
                    {({ isActive }) => (
                        <button className={isActive ? "btnActive" : "btnNav"}>
                        🍕 Home</button>
                    )}
                </NavLink>              
                    <NavLink to="/Profile">
                    {({ isActive }) => (
                        <button className={isActive ? "btnActive" : "btnNav"}>
                        🔓Profile </button>
                    )}
                </NavLink>
                    <button className="btnNav">🔒Logout</button>                    
                <NavLink to="/Login">
                {({ isActive }) => (
                    <button className={isActive ? "btnActive" : "btnNav"}>
                    🔐Login</button>
                )}
                </NavLink>
                <NavLink to="/Register">
                {({ isActive }) => (
                    <button className={isActive ? "btnActive" : "btnNav"}>
                    🔐Register</button>
                )}
                </NavLink>                                    
                
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