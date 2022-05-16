import {useNavigate} from 'react-router-dom';
import {CartItem} from '../components/cart/CartItem';
import SharedBtn from '../components/shared/MainBtn';
import CartService from '../domain/cart/cartService';
import {useCart} from '../store/cart-context';

export const CartPage = () => {
  const {state: cart} = useCart();

  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate('/');
  };

  return (
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="cart">
              <div className="wrap">
                <div className="cart__container">
                  <div className="cart__top">
                    <div className="cart__top-btn">
                      <SharedBtn variant="black" onClick={handleBackToShop}>
                        Back to shop
                      </SharedBtn>
                    </div>
                    <div className="cart__title">
                      <span className="pretitle">SHOP</span>
                      <h2 className="section-title">SAME OLD SAME OLD</h2>
                    </div>
                    <div className="cart__top-btn">
                      <SharedBtn
                        variant="black"
                        onClick={() => {
                          // console.log('checkout clicked');
                          CartService.completeCheckout(cart._items);
                        }}>
                        CHECKOUT
                      </SharedBtn>
                    </div>
                  </div>

                  {/* <h1>Total: ${cart.calculateTotal()}</h1> */}

                  <div className="row cart__wrapper">
                    {/* {cartItems.map((name, index) => {
                      return <CartItem key={index} name={name} index={index} />;
                    })} */}
                    {cart._items.map(item => {
                      return (
                        <CartItem
                          key={item.product.id}
                          name={item.product.name}
                          id={item.product.id}
                          price={item.product.price}
                          photo={item.product.photoUrl}
                          amount={item.amount}
                        />
                        // `<p>Radi</p>`
                      );
                    })}
                    {/* <CartItem name={cart.items[0].name} /> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
