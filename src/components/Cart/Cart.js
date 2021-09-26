import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
   


    for(const character of cart){
         
       total = total + character.salary;
      
    }
    
    return (
        <div className="p-2 border border-dark mt-2 ">
            
                <h3>Total Added Agents: {props.cart.length}</h3>
                <p>Total Cost: ${total}</p>
                <ul>
                    {
                        cart.map(cart =>
                            <div className="cart border border-danger border-rounded mt-2">
                                <img src={cart.img}  alt="" />
                                <p>{cart.name}</p>
                                <p>Salary: ${cart.salary}</p>

                            </div> )
                    }
                </ul>
            <button className="btn btn-danger px-5">Proceed</button>
        </div>
    );
};

export default Cart;