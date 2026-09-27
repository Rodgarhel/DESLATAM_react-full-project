import Header from './Header.jsx'; 
import CardPizza from './CardPizza.jsx';
import pizzaNap from '../assets/pizza_napp.jpg';
import pizzaEsp from'../assets/pizza_esp.jpg';
import pizzaPep from '../assets/pizza_pep.jpg';
import { pizzas } from '../assets/pizzas.js';

function Home() {
   
    return (
        <main className="home">
            <Header />
            
            <section className="gallery">
                {pizzas.map((pizza)=>(
                    <CardPizza
                    key={pizza.id}
                    pizza={pizza}
                    />                 
                ))}
            </section>
        </main>
    )
}

export default Home;