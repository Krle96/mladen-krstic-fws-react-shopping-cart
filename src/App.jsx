import {Routes, Route} from 'react-router-dom';
import {ProductPage} from './pages/ProductPage';
import {CartPage} from './pages/CartPage';
import {Footer} from './components/layout/Footer';
import {Header} from './components/layout/Header';
import {CartProvider} from './store/cart-context';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
