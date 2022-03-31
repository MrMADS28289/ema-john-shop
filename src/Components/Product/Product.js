import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';




const Product = ({ handleAddToCart, product }) => {

    const { name, ratings, img, price, seller } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className="text-sm">
                <p>Price: ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn' >
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;