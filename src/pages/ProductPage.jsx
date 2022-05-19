import {useEffect, useState} from 'react';
import Products from '../components/products/Products';
import ProductService from '../domain/product/ProductService';

export const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await ProductService.searchProduct();
      setProducts(response.items);
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="cards">
              <div className="wrap">
                <div className="cards__container">
                  <span className="pretitle">SHOP</span>
                  <h2 className="section-title">SAME OLD SAME OLD</h2>
                  <div className="row cards__wrapper">
                    {products.length > 0 ? (
                      <Products products={products} />
                    ) : (
                      <h2>No task to show</h2>
                    )}
                  </div>
                  <div className="row cards__wrapper"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
