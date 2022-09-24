import React, { useCallback, useEffect, useState } from 'react';
import Error from '../error/Error';
import {
  Drawer,
  Grid,
  LinearProgress,
  CircularProgress,
  Button,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Wrapper, StyledButton, Paginate } from './Products.styles';
import Cart from '../cart/Cart';
import {
  CartProduct,
  Discount,
  ProductDetail,
  ShoppingCart,
} from '../../@types/Product';
import Product from '../product/Product';
import { useGetProductsQuery } from '../../services/Product';
import { Badge } from '@mui/material';
import { useUser } from '../../hooks/useUser';
import { DiscountTypes } from '../../contants/Contants';
import { getDiscount } from '../../utils/HelperUtils';
const defaultCartItems = { products: {}, totalQuantity: 0, totalPrice: 0 };
const Products: React.FunctionComponent = () => {
  const [offset, setOffset] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const owner = useUser();
  const { data, isLoading, isFetching, error } = useGetProductsQuery<any>(
    `/products?offset=${offset}&limit=${10}`
  );

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ShoppingCart>(defaultCartItems);

  useEffect(() => {
    if (isFetching || isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isFetching, isLoading]);

  const handleAddToCartMine = useCallback(
    (product: ProductDetail, discount: Discount) => {
      setCartItems((prev: ShoppingCart) => {
        const cart: ShoppingCart = { ...prev };
        const prod: CartProduct = cart['products'][product.type] || {
          ...product,
          totalQuantity: 0,
          totalPrice: 0,
          discountPrice: 0,
          discountQuantity: 0,
          finalQuantity: 0,
          finalPrice: 0,
        };
        prod.totalQuantity += 1;
        prod.totalPrice = prod.totalQuantity * product.price;

        if (discount && discount.id) {
          const { value: purchaseQuantity, reward } = discount;
          if (reward > 0 && prod.totalQuantity >= purchaseQuantity) {
            if (discount.type === DiscountTypes.Price) {
              prod.discountPrice =
                Math.floor(prod.totalQuantity / purchaseQuantity) * reward;
            }
            if (discount.type === DiscountTypes.Quantity) {
              prod.discountQuantity =
                Math.floor(prod.totalQuantity / purchaseQuantity) * reward;
            }
          }
        }

        prod.finalPrice = prod.totalPrice - prod.discountPrice;
        prod.finalQuantity = prod.totalQuantity + prod.discountQuantity;
        cart['products'][prod.type] = { ...prod };
        let totalPrice = 0;
        let totalQuantity = 0;
        let totalUserQuantity = 0;
        Object.keys(cart.products).forEach((prodKey) => {
          totalPrice += cart.products[prodKey].finalPrice;
          totalQuantity += cart.products[prodKey].finalQuantity;
          totalUserQuantity += cart.products[prodKey].totalQuantity;
        });
        cart.totalPrice = totalPrice;
        cart.totalUserQuantity = totalUserQuantity;
        cart.totalQuantity = totalQuantity;
        return cart;
      });
    },
    []
  );

  const handleRemoveFromCartMine = useCallback(
    (product: ProductDetail, discount: Discount) => {
      setCartItems((prev: ShoppingCart) => {
        const cart: ShoppingCart = { ...prev };
        const prod: CartProduct = cart['products'][product.type];
        const prevQuantity = prod.totalQuantity;
        prod.totalQuantity -= 1;
        prod.totalPrice = prod.totalQuantity * product.price;
        if (discount && discount.id) {
          const { value: purchaseQuantity, reward } = discount;
          if (reward > 0 && prevQuantity >= purchaseQuantity) {
            if (discount.type === DiscountTypes.Price) {
              prod.discountPrice =
                Math.floor(prod.totalQuantity / purchaseQuantity) * reward;
            }
            if (discount.type === DiscountTypes.Quantity) {
              prod.discountQuantity =
                Math.floor(prod.totalQuantity / purchaseQuantity) * reward;
            }
          }
        }

        prod.finalPrice = prod.totalPrice - prod.discountPrice;
        prod.finalQuantity = prod.totalQuantity + prod.discountQuantity;
        cart['products'][prod.type] = { ...prod };
        if (prod.totalQuantity === 0) {
          delete cart['products'][product.type];
        }
        let totalPrice = 0;
        let totalQuantity = 0;
        let totalUserQuantity = 0;
        Object.keys(cart.products).forEach((prodKey) => {
          totalPrice += cart.products[prodKey].finalPrice;
          totalQuantity += cart.products[prodKey].finalQuantity;
          totalUserQuantity += cart.products[prodKey].totalQuantity;
        });
        cart.totalPrice = totalPrice;
        cart.totalQuantity = totalQuantity;
        cart.totalUserQuantity = totalUserQuantity;
        return cart;
      });
    },
    []
  );

  if (error) {
    return <Error />;
  }

  const cartContent = () => {
    if (!owner) {
      return (
        <>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart
              checkoutCart={cartItems}
              discounts={data?.discounts || []}
              addToCart={handleAddToCartMine}
              removeFromCart={handleRemoveFromCartMine}
            />
          </Drawer>
          <StyledButton
            onClick={() => setCartOpen(true)}
            style={{ position: 'sticky' }}
          >
            <Badge badgeContent={cartItems.totalUserQuantity} color="error">
              <AddShoppingCart color={'primary'} style={{ fontSize: '50px' }} />
            </Badge>
          </StyledButton>
        </>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      {cartContent()}
      {loading ? (
        <LinearProgress style={{ margin: 100 }} />
      ) : (
        <Grid container spacing={5}>
          {data?.products?.map((product: ProductDetail) => {
            return (
              <Grid item key={product.id} xs={10} sm={2}>
                <Product
                  product={product}
                  owner={owner}
                  discount={getDiscount(product, data?.discounts || [])}
                  handleAddToCart={handleAddToCartMine}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      {data?.total ? (
        <Paginate>
          <Button
            color="primary"
            variant={offset !== 1 ? 'outlined' : 'text'}
            onClick={() => setOffset((old) => Math.max(old - 10, 1))}
            disabled={offset === 1}
          >
            {loading ? <CircularProgress /> : 'Previous'}
          </Button>
          <Button
            color="primary"
            variant={data.total > offset + 10 ? 'outlined' : 'text'}
            onClick={() => setOffset((old) => old + 10)}
            disabled={data.total < offset + 10}
          >
            {loading ? <CircularProgress /> : 'Next'}
          </Button>
        </Paginate>
      ) : (
        <CircularProgress />
      )}
    </Wrapper>
  );
};

export default Products;
