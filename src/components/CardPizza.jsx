
function CardPizza({pizza}) {
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
                <button className="btnMore">Ver más 👀</button>
                <button className="btnAdd">Añadir 🛒</button>  
            </div>
        </article>
    )
}

export default CardPizza;
