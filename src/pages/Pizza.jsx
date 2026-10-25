import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Pizza() {
    const { id } = useParams()

    const  [pizzaInfo, setPizzaInfo] = useState(null);

    useEffect(()=>{
        fetchApi();
    }, [id]);

    const fetchApi = async ()=>{
        const url = `http://localhost:5000/api/pizzas/${id}`;
        const  response = await fetch(url);
        const data  = await response.json();
        setPizzaInfo(data);        
    }

  return (
    <article className="infoPizza">
        {pizzaInfo != null ? (
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
        ) : (<p>...Loading Pizza</p>)}
        </article>
  )}

export default Pizza
