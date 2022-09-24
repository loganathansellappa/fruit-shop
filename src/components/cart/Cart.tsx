import { Button } from '@material-ui/core';
import CartItem from '../CartItem/CartItem';

import { Wrapper } from './Cart.styles';
import { CartProduct, Discount, ShoppingCart } from '~/@types/Product';
import { useNavigate } from 'react-router-dom';

type CartProps = {
  checkoutCart: ShoppingCart;
  discounts: Discount[];
  addToCart: (product: CartProduct, discount: Discount) => void;
  removeFromCart: (product: CartProduct, discount: Discount) => void;
};

const Cart = ({
  checkoutCart,
  addToCart,
  removeFromCart,
  discounts,
}: CartProps) => {
  const navigate = useNavigate();
  const products = Object.keys(checkoutCart.products);
  return (
    <Wrapper>
      <h2>
        Your Cart {Object.keys(products).length === 0 ? 'is Empty' : null}
      </h2>

      {products.map((k: string) => (
        <CartItem
          key={k}
          product={checkoutCart.products[k]}
          discounts={discounts}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}

      {products.length ? (
        <>
          <h2>Total Price: €{checkoutCart.totalPrice.toFixed(2)}</h2>
          <Button
            color="primary"
            variant={'outlined'}
            onClick={() => navigate('/order')}
            disabled={products.length === 0}
          >
            Buy Now
          </Button>
        </>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default Cart;
