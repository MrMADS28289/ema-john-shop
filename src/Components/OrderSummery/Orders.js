import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReviw from '../ProductReviw/ProductReviw';
import { deleteShoppingCart } from '../../utilities/fakedb';


const Orders = () => {

    const navigate = useNavigate();
    const [cart, setCart] = useCart();

    const handleRemoveItem = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='shop-container'>
            <div className="flex flex-col items-center">
                {
                    cart.length ?
                        cart.map(product => <ProductReviw
                            key={product._id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></ProductReviw>)
                        : <h1 className='text-5xl text-red-400 font-bold mt-5 p-4'>You have to must select a item!
                            <br /> For Reviw. <br /> <button onClick={() => navigate(-1)} className='text-lg bg-orange-400 text-white px-3 rounded-lg hover:bg-orange-500'>Go to shop</button></h1>

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => {
                        deleteShoppingCart();
                        setCart([]);
                    }} className='flex justify-between items-center bg-[#FF3030] text-white p-3 rounded-sm w-[100%] my-5 hover:bg-red-700'>
                        <p>Clear Cart</p>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                    <Link to='/shipment'>
                        <button className='flex justify-between items-center bg-[#FF9900] text-white p-3 rounded-sm w-[100%] hover:bg-orange-500'>
                            <p>Checkout</p>
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;