import { Button, Grid, Typography } from '@material-ui/core';
import { Wrapper } from './product.styles';
import { Discount, ProductDetail } from '../../@types/Product';
import { truncateString } from '../../utils/HelperUtils';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  product: ProductDetail;
  owner: boolean;
  discount?: Discount;
  handleAddToCart: (a: ProductDetail, b: Discount) => void;
};

const Product = ({ product, handleAddToCart, owner, discount }: Props) => {
  const action = useCallback(
    (owner: boolean) => {
      const buttonStyle = {
        backgroundColor: 'green',
        color: '#fff',
        borderRadius: '0 0 20px 20px',
      };
      if (!owner) {
        return (
          <Button
            onClick={(e) => {
              handleAddToCart(product, discount as Discount);
            }}
            style={{ ...buttonStyle }}
          >
            Add to Cart
          </Button>
        );
      } else {
        const navigate = useNavigate();
        return (
          <Button
            onClick={() => navigate(`/admin/products/${product.id}`)}
            style={{ ...buttonStyle }}
          >
            View More
          </Button>
        );
      }
    },
    [owner]
  );

  return (
    <Wrapper>
      <img src={product.imageUrl} alt={product.title} />
      <Grid>
        <Typography noWrap variant={'h4'}>
          {product.title}
        </Typography>
        <Typography variant={'body1'}>
          {truncateString(product.description)}
        </Typography>
        <Typography noWrap variant={'h4'}>
          €{product.price}
        </Typography>
      </Grid>
      {action(owner)}
    </Wrapper>
  );
};

export default Product;
