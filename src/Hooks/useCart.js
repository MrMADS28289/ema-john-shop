import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {

        const storedCart = getStoredCart();
        const saveCart = [];

        for (const id in storedCart) {
            const addededProduct = products.find(product => product.id === id);
            if (addededProduct) {
                const quantity = storedCart[id];
                addededProduct.quantity = quantity;
                saveCart.push(addededProduct);
            }
        }

        setCart(saveCart);

    }, [products])

    return [cart, setCart];
}

export default useCart;