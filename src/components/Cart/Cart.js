import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
   


    for(const character of cart){
         
       total = total + character.salary;
      
    }
    
    return (
        <div>
            <div>
                <h3>Total Added: {props.cart.length}</h3>
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
            </div>
        </div>
    );
};

export default Cart;