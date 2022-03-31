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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;