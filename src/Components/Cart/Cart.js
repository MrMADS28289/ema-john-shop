import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    // const orders = cart;
    // console.log(orders);

    let price = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }

    const tax = parseFloat((price * 0.1).toFixed(2));
    const total = price + shipping + tax;

    return (
        <div className='cart'>
            <h4>Orders Summary</h4>
            <p>selected items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${total}</h5>
        </div>
    );
};


export default Cart;