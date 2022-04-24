import { faArrowCircleRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { deleteShoppingCart } from '../../utilities/fakedb'
import { useEffect, useState } from 'react';



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [count, setCount] = useState();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setCount(pages);
            })
    }, [])

    const handleAddToCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart?.find(product => product._id === selectedProduct._id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart?.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart)
        addToDb(selectedProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products?.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(count).keys()]
                            .map(number => <button
                                key={number}
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
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
                    <Link to='/orders'>
                        <button className='flex justify-between items-center bg-[#FF9900] text-white p-3 rounded-sm w-[100%] hover:bg-orange-500'>
                            <p>Review Order</p>
                            <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;