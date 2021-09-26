
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons' 



import './Character.css'
const Character = (props) => {
    
    const {name, age, salary, img, skills, gender} = props.character;
    const elementCart = <FontAwesomeIcon icon={faShoppingCart} />
    const elementFb = <FontAwesomeIcon icon={faFacebookF} />
    const elementTw = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div className="col-md-4">
            <div className="card-container h-100">
            <div className="card h-100 border-danger shadow m-2">
            <img src={img} className="" alt="" />
            <div className="card-body">
            <h5>{name}</h5>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Salary: ${salary}</p>
            <p>Special on: {skills}</p>
            <button onClick={ () => props.handleAddToCart(props.character)} className="btn shadow btn-danger border-success">{elementCart} Add To Cart</button>
            <br />
            <div className="d-flex mt-2 justify-content-center">
                <div className="p-2 m-2 border-primary text-primary border w-40p">
                {elementFb} 
                </div>

            <div className=" text-info m-2 border-info p-2 border w-40p">  
                {elementTw} 
            </div>
            </div>
            
            </div>
            
            </div>
            </div>

            
            
        </div>
    );
};

export default Character;