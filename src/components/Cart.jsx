import { useState }  from 'react'
import { pizzaCart } from '../assets/pizzas'

function Cart() {
  const [itemCount, setItemCount] = useState({});

  const addItem = (id) => {
    setItemCount(prev => ({
        ...prev, [id]: (prev[id] || 0) +1
    }));
  };

  const subItem = (id) => {
    setItemCount(prev => ({
        ...prev, [id]: Math.max((prev[id] || 0) - 1, 0)
    }))
  }

  // Calculate total 
  const total = pizzaCart.reduce((acc, item) => { return acc + item.price * (itemCount[item.id] || 0); }, 0);

  return (
    <div className='cartZone'>
      <h3>Detalles del pedido:</h3>
        <div className='cartBox'>            
            {pizzaCart.map((item)=>(
                <li className='Cart-item'
                key={item.id}>
                    <div className='itemBox'>
                        <img src={item.img} alt={item.name} className='cart-img'/>
                        <p>{item.name}</p>
                    </div>
                    <p>${item.price}</p>
                    <div className='cart-btnBox'>
                        <button className='cart-btn' 
                        id='subBtn'
                        onClick={()=>subItem(item.id)}
                        >-</button>
                        <p>{itemCount[item.id] || 0}</p>
                        <button className='cart-btn' 
                        id='addBtn'
                        onClick={()=>addItem(item.id)}
                        >+</button>
                    </div>
                </li>
            ))}   
            <h2>Total:${total}</h2>
            <button>Pagar</button>
        </div>
    </div>
  )
}

export default Cart
