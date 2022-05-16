// import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ProductPage} from './pages/ProductPage';
import {CartPage} from './pages/CartPage';
import {Footer} from './components/layout/Footer';
import {Header} from './components/layout/Header';
import CartService from './domain/cart/cartService';
import {CartProvider} from './store/cart-context';

const App = () => {
  const cart = CartService.getCart();

  return (
    <CartProvider>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
