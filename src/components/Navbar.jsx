

function Navbar() {
    const total  = 25000;
    const token =  false;

    return (
        <nav className="navbar">            
            <div className="navButtons">
                <h3> Pizzería Mamma Mia!</h3>
                <button className="btnNav">🍕 Home</button>
                {
                    token ? (<>
                    <button className="btnNav">🔓Profile</button>
                    <button className="btnNav">🔒Logout</button>
                    </>):(<>
                    <button className="btnNav">🔐Login</button>
                    <button className="btnNav">🔐Register</button>
                    </>)
                }
                
            </div>
            <div className="cart">
                <button className="btnCart">🛒 Total: ${total.toLocaleString()} </button>
            </div>
        </nav>
    )
}

export default Navbar;