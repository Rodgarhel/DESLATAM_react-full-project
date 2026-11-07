import { useContext, useState } from 'react';
import {useCart} from '../context/CartContext.jsx';
import { GlobalContext } from '../context/GlobalContext.jsx';

function Cart() {
  const { token } =useContext(GlobalContext);
  const { pizzas, cart, total, addToCart, removeFromCart, clearCart} = useCart();

  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);

  // CHECKOUT 
  const handleCheckout = async () => {
    if (!token || cart.length === 0) return;
    
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
        });
      
        const data =await res.json();

        if (!res.ok) {
          throw new Error(data.error || data.message || "Purchase failed");
        }

        clearCart();
        setColor("green");
        setMsg("Purchase successful!");
  } catch (error) {
    setColor("red");
    setMsg(error.message || "Purchase failed");
  } finally {
    setLoading(false);
  }};
  
  // RENDER
  
  return (
    <div className='cartZone'>
      <h3>Detalles del pedido:</h3>

        <div className='cartBox'>            
            {cart.map((cartItem)=>{
              // find pizza info corresponding to ID
              const pizza = pizzas.find(
                (pizza) => pizza.id === cartItem.id
              );

              if(!pizza) { return null;}
              return (
            
                <li className='Cart-item'
                key={cartItem.id}>
                    <div className='itemBox'>
                        <img src={pizza.img} alt={pizza.name} className='cart-img'/>
                        <p>{pizza.name}</p>
                    </div>
                    <p>${pizza.price}</p>
                    <div className='cart-btnBox'>
                        <button className='cart-btn' 
                        id='subBtn'
                        onClick={()=>{removeFromCart(cartItem.id)}}
                        >-</button>
                        <p>{cartItem.count}</p>
                        <button className='cart-btn' 
                        id='addBtn'
                        onClick={()=>{addToCart(cartItem.id)}}
                        >+</button>
                    </div>
                </li>
            )
          })}   
            <h2>Total:${total}</h2>
            <button disabled={!token || cart.length === 0 || loading}
              onClick={handleCheckout}
            >
              {loading ? "Procesando..." : "Pagar"}
            </button>
            {msg && <p style={{ color }}>{msg}</p>}
        </div>
    </div>
  )
}

export default Cart
