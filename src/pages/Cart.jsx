import {useCart} from '../context/CartContext.jsx';

function Cart() {
  const { pizzas, cart, total, addToCart, removeFromCart,} = useCart();

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
            <button>Pagar</button>
        </div>
    </div>
  )
}

export default Cart
