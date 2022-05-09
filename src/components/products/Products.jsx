import {Product} from './Product';

const Products = ({products}) => {
  return (
    <>
      {console.log(products)}
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default Products;
