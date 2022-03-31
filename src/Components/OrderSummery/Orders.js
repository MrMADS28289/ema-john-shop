import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReviw from '../ProductReviw/ProductReviw';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveItem = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="flex flex-col items-center">
                {
                    cart.map(product => <ProductReviw
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ProductReviw>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='flex justify-between items-center bg-[#FF3030] text-white p-3 rounded-sm w-[100%] my-5'>
                        <p>Clear Cart</p>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                    <Link to='/inventory'>
                        <button className='flex justify-between items-center bg-[#FF9900] text-white p-3 rounded-sm w-[100%]'>
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