import Header from '../components/Header.jsx'; 
import CardPizza from '../components/CardPizza.jsx';
import  { useCart } from '../context/CartContext.jsx';


function Home() {
    const { pizzas, cart } = useCart();
   
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