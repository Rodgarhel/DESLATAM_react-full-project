import { useState, useEffect}  from 'react';

import Header from './Header.jsx'; 
import CardPizza from './CardPizza.jsx';
import pizzaNap from '../assets/pizza_napp.jpg';
import pizzaEsp from'../assets/pizza_esp.jpg';
import pizzaPep from '../assets/pizza_pep.jpg';



function Home() {
    const  [pizzas, setPizzas] = useState([]);
        
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
   
    return (
        <main className="home">
            <Header />            
            <section className="gallery">
                {pizzas.length > 0 ? pizzas.map((pizza)=>(
                    <CardPizza
                    key={pizza.id}
                    pizza={pizza}
                    />                 
                )) : <p>...Loading Products</p>}
            </section>
        </main>
    )
}

export default Home;