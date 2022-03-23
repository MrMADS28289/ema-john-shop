import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let price = 0;
    let shipping = 0;

    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((price * 0.1).toFixed(2));
    const total = price + shipping + tax;

    return (
        <div className='cart'>
            <h4>Orders Summary</h4>
            <p>selected items: {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${total}</h5>
        </div>
    );
};

export default Cart;