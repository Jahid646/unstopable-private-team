import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import './Home.css'
const Home = () => {
    const [characters, setCaracters] = useState([]);


    useEffect(() => {
             fetch('data.json')
            .then(res => res.json())
            .then(data => setCaracters(data));
      }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        
                            {
                                characters.map(character => <Character
                                character={character}
                                key={character.key}
                                ></Character>)
                            }
                        
                    </div>
                </div>

                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Home;