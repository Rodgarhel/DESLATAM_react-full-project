function CardPizza(props) {
    return (
        <article className="cardPizza">
            <div className="cardImage">
                <img src={props.img} alt={props.name} />
                <h3>Pizza {props.name}</h3>
            </div>  

            <div  className="cardIngredients">
            <p>Ingredientes:</p> 
            <p className="ingredients">🍕{props.ingredients.join(", ")}</p> 
            </div>
            
            <h2 className="cardPrice">Precio: ${props.price.toLocaleString()}</h2>
            <div className="cardButtons">
                <button className="btnMore">Ver más 👀</button>
                <button className="btnAdd">Añadir 🛒</button>  
            </div>
        </article>
    )
}

export default CardPizza;
