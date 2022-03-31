import { faArrowCircleRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products, setPorducts] = useProducts();
    const [cart, setCart] = useCart(products);


    const handleAddToCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart?.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart?.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products?.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='flex justify-between items-center bg-[#FF3030] text-white p-3 rounded-sm w-[100%] my-5'>
                        <p>Clear Cart</p>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                    <Link to='/orders'>
                        <button className='flex justify-between items-center bg-[#FF9900] text-white p-3 rounded-sm w-[100%]'>
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