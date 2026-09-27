import Header from './Header.jsx'; 
import CardPizza from './CardPizza.jsx';
import pizzaNap from '../assets/pizza_napp.jpg';
import pizzaEsp from'../assets/pizza_esp.jpg';
import pizzaPep from '../assets/pizza_pep.jpg';

function Home() {
    return (
        <main className="home">
            <Header />
            
            <section className="gallery">
                <CardPizza
                name="Napolitana"
                price={5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}                
                img={pizzaNap}
                />
                <CardPizza
                name="Española"
                price={6950}
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                img={pizzaEsp}
                />
                <CardPizza
                name="Pepperoni"
                price={6950}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img={pizzaPep}
                />
            </section>
        </main>
    )
}

export default Home;