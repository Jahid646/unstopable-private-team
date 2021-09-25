import React from 'react';
import './Character.css'
const Character = (props) => {
    const {name, age, key, salary, img, skill} = props.character;
    return (
        <div className="col-md-4">

            <div>
                <h1>name {name}</h1>
            <img src={img} className="card-img-top h-100 w-50" alt="" />
            </div>
            
        </div>
    );
};

export default Character;