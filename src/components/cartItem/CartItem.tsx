import { Button } from '@material-ui/core';

import { Wrapper } from './CartItem.styles';
import { Discount, CartProduct } from '~/@types/Product';
import { getDiscount } from '../../utils/HelperUtils';

type CartItemProps = {
  product: CartProduct;
  discounts: Discount[];
  addToCart: (product: CartProduct, discount: Discount) => void;
  removeFromCart: (product: CartProduct, discount: Discount) => void;
};

const CartItem = ({
  product,
  addToCart,
  removeFromCart,
  discounts,
}: CartItemProps) => {
  const discount = getDiscount(product, discounts);
  return (
    <Wrapper>
      <div>
        <h3>
          {product.title} - {product.type}
        </h3>

        <div className="information">
          <p>Price: €{product.price}</p>
          <p>Total: €{product.totalPrice.toFixed(2)}</p>
          {product.discountPrice > 0 ? (
            <p>Discount: €{product.discountPrice.toFixed(2)}</p>
          ) : null}
          {product.discountQuantity > 0 ? (
            <p>Free: {product.discountQuantity}</p>
          ) : null}
          <p>FinalPrice: €{product.finalPrice.toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(product, discount)}
          >
            -
          </Button>
          <p>{product.finalQuantity}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(product, discount)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={product.imageUrl} alt={product.title} />
    </Wrapper>
  );
};

export default CartItem;
