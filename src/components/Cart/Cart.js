import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
   


    for(const character of cart){
         
       total = total + character.salary;
      
    }
    
    return (
        <div className="p-2 border border-primary mt-2 ">
            
                <h3>Total Added Agents: {props.cart.length}</h3>
                <p>Total Cost: ${total}</p>
                {
                    cart.map(cart =>
                        <div key={cart.key} className="cart border border-danger border-rounded mt-2">
                            <img src={cart.img}  alt="" />
                            <p>{cart.name}</p>
                            <p>Salary: ${cart.salary}</p>

                        </div> )
                }
            <button className="btn btn-danger px-5">Proceed</button>
        </div>
    );
};

export default Cart;