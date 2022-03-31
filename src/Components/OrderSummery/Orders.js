import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h1>this is Orders: {products.length}</h1>
            <p>adeded: {cart.length}</p>
        </div>
    );
};

export default Orders;