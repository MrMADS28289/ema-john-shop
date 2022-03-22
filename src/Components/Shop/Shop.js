import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products, setPorducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPorducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Orders Summary</h4>
                <p>selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;