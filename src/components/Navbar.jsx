import {Link} from 'react-router-dom'

function Navbar() {
    const total  = 25000;
    const token =  true;

    return (
        <nav className="navbar">            
            <div className="navButtons">
                <h3> Pizzería Mamma Mia!</h3>
                <Link to="/DESLATAM_react-full-project/">
                    <button className="btnNav">🍕 Home</button>
                </Link>
                {/* token workflow
                {
                    token ? (<>
                    <Link to="/Profile">
                        <button className="btnNav">🔓Profile</button>
                    </Link>
                    <button className="btnNav">🔒Logout</button>
                    </>):(<>
                    <Link to="/Login">
                        <button className="btnNav">🔐Login</button>
                    </Link>
                    <Link to="/Register">
                        <button className="btnNav">🔐Register</button>
                    </Link>
                    </>)
                } 
                 */}
                 
                    
                    <Link to="/Profile">
                        <button className="btnNav">🔓Profile</button>
                    </Link>
                    <button className="btnNav">🔒Logout</button>                    
                    <Link to="/Login">
                        <button className="btnNav">🔐Login</button>
                    </Link>
                    <Link to="/Register">
                        <button className="btnNav">🔐Register</button>
                    </Link>
                    
                 
                
            </div>
            <div className="cart">
                <Link to="/Cart">
                    <button className="btnCart">🛒 Total: ${total.toLocaleString()} </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;