import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const developers of cart) {
        total = total + developers.salary;
    }
    return (
        <div>
            <h3>Student Added: {props.cart.length}</h3>
            <h3>Total Salary: <span className="text-success">${total}</span></h3>
            {cart.map((developers) =>
                <div key={developers.key + Math.random() + " "} className="cart d-flex justify-content-center align-items-center border border-1 border-muted py-2 ">
                    <span>
                        <h6>{developers.name}</h6>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Cart;