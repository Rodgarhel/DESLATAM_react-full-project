import { Link } from "react-router-dom";
import {useCart} from '../context/CartContext.jsx';

function CardPizza({pizza}) {
    const { addToCart } = useCart();    
    
    return (
        <article className="cardPizza">
            <div className="cardImage">
                <img src={pizza.img} alt={pizza.name} />
                <h3>Pizza {pizza.name}</h3>
            </div>  

            <div  className="cardIngredients">
            <p>Ingredientes:</p> 
            <p className="ingredients">🍕{pizza.ingredients.join(", ")}</p> 
            </div>
            
            <h2 className="cardPrice">Precio: ${pizza.price.toLocaleString()}</h2>
            <div className="cardButtons">
                <Link to='/Pizza'>
                    <button className="btnMore">Ver más 👀</button>
                </Link>
                <button onClick={() => addToCart(pizza.id)} className="btnAdd">Añadir 🛒</button>  
            </div>
        </article>
    )
}

export default CardPizza;
