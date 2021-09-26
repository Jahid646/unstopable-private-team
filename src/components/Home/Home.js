import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Character from '../Character/Character';
import './Home.css'
const Home = () => {
    const [characters, setCaracters] = useState([]);
    const [cart, setCart] = useState([]);
   

    useEffect(() => {
             fetch('data.json')
            .then(res => res.json())
            .then(data => setCaracters(data));
      }, [])


 const handleAddToCart = (character) => {
        const ss = cart.find(cart => cart.name === character.name)
        if(ss){
            alert('Already Added');
        }
        else{
               const newCart = [...cart, character];

        setCart(newCart);
        }
     

    }
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-9">
                    <div className="row g-4">
                        
                            {
                                characters.map(character => <Character
                                character={character}
                                key={character.key}
                                handleAddToCart={handleAddToCart}
                                ></Character>)
                            }
                        
                    </div>
                </div>

                <div className="col-md-3">
                            <Cart cart={cart} key={cart.key}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Home;