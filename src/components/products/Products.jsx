import {Product} from './Product';
// import {useState} from 'react';
// import CartService from '../../domain/cart/cartService';

const Products = ({products, cart}) => {
  // const [cartItems, setCartItems] = useState([]);

  return (
    <>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default Products;
