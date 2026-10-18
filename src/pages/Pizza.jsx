
import { useState, useEffect } from 'react'

function Pizza() {
    const  [pizzaInfo, setPizzaInfo] = useState({});

    useEffect(()=>{
        fetchApi();
    }, []);

    const fetchApi = async ()=>{
        const url = "http://localhost:5000/api/pizzas/p001";
        const  response = await fetch(url);
        const data  = await response.json();
        setPizzaInfo(data);
        console.log(data);
    }

  return (
    <article className="infoPizza">
        {pizzaInfo.name ? (
            <>
            <div className="cardImage">
                <img src={pizzaInfo.img} alt={pizzaInfo.name} />
            </div>  
            <h2>Pizza {pizzaInfo.name}</h2>

            <div  className="cardIngredients">
            <p>Ingredientes:</p> 
            <p className="ingredients">🍕{pizzaInfo.ingredients.join(", ")}</p> 
            </div>            
            <p>{pizzaInfo.desc}</p>
            <h3 className="cardPrice">Precio: ${pizzaInfo.price.toLocaleString()}</h3>
            </>
        ):(<p>...Loading Pizza</p>)}
        </article>
  )}

export default Pizza
