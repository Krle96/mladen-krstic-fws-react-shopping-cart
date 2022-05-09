import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ProductPage} from './pages/ProductPage';
import {CartPage} from './pages/CartPage';
import {Footer} from './components/layout/Footer';
import {Header} from './components/layout/Header';

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
