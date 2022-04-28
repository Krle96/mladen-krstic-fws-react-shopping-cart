import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductPage/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
    </Routes>
  );
}

export default App;