import {Product} from './Product';

const Products = ({products}) => {
  return (
    <>
      {console.log(products)}
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default Products;
