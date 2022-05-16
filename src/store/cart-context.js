import * as React from 'react'
import CartEntity from '../domain/cart/cartEntity'

const CartContext = React.createContext()

const cartReducer = (state, action) => {
    const cartCopy = new CartEntity([...state.items]);

    switch (action.type) {
        case 'add': {
            cartCopy.addItem(action.payload);
            break;
        }
        case 'remove': {
            cartCopy.removeItem(action.payload);
            break;
        }
        case 'increaseAmount': {
            const product = cartCopy.findItem(action.payload.product.id);
            product.increaseAmount(action.payload.productAmount);
            break;
        }
        default:
            break;
    }

    return cartCopy;
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(cartReducer, new CartEntity())
    const value = { state, dispatch }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCart = () => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}

export { CartProvider, useCart }

