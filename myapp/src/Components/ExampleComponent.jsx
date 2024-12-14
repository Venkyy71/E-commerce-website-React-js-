import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ExampleComponent = () => {
    const { cartItems, setCartItems } = useContext(ShopContext);

    const addToCart = (productId) => {
        setCartItems((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1,
        }));
    };

    return (
        <div>
            <button onClick={() => addToCart(1)}>Add Product 1 to Cart</button>
            <div>Cart Items: {JSON.stringify(cartItems)}</div>
        </div>
    );
};

export default ExampleComponent;
