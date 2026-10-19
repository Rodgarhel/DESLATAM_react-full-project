import { createContext, useContext, useState, useEffect } from 'react';

// CREATE CONTEXT
//--------------
export const CartContext = createContext();

// PROVIDER
//--------------
const CartProvider = ({ children }) => {
    //  STATE
    //--------------
    const [cart, setCart] = useState([]);
    const [pizzas, setPizzas] = useState([]);

    //FETCH API
    //--------------        
    const fetchPizzas = async ()=>{
        const url = "http://localhost:5000/api/pizzas";
        const  response = await fetch(url);
        const data  = await response.json();
        setPizzas(data);
        console.log(data);
    }    
    useEffect(()=>{
        fetchPizzas();
    }, []);  
    
    //FUNCTIONS
    //--------------
    const addToCart = (id) => {
        setCart((prevCart) => {
            const itemIs = prevCart.find((item) => item.id === id);

            if (itemIs) {
                return prevCart.map((item) => 
                    item.id === id 
                ? { ...item, count: item.count + 1} 
                : item       
                )} 
            return [...prevCart, {id: id, count: 1}];
        });
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const itemIs = prevCart.find((item) => item.id === id);

            if (!itemIs) return prevCart;

            if (itemIs.count > 1) {
                return prevCart.map((item) => 
                    item.id === id 
                ? { ...item, count: item.count - 1} 
                : item       
                )} 
            return prevCart.filter((item) => item.id !== id);    
        });
    }

    
    //TOTAL
    //--------------
    const total = cart.reduce((acc, item) => { 
        const pizza = pizzas.find((pizza) =>
        pizza.id === item.id);
        return acc + (pizza ? pizza.price * item.count : 0); }, 0);

    //PROVIDE
    //--------------

    return (
        <CartContext.Provider value={{ pizzas, cart, total, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

//CUSSTOM HOOK
//--------------

export const useCart = () => {
    return useContext(CartContext);
}

// EXPORT PROVIDER
//--------------
export default CartProvider;