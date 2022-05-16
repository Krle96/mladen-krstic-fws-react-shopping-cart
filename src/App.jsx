// import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ProductPage} from './pages/ProductPage';
import {CartPage} from './pages/CartPage';
import {Footer} from './components/layout/Footer';
import {Header} from './components/layout/Header';
import CartService from './domain/cart/cartService';

const App = () => {
  const cart = CartService.getCart();

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<ProductPage cart={cart} cartItems={cart.items} />}></Route>
        <Route
          path="/cart"
          element={<CartPage cart={cart} cartItems={cart.items} />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
