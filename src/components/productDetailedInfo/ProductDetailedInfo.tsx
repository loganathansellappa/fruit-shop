import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  LinearProgress,
  TextField,
} from '@material-ui/core';
import { Title, Wrapper } from './ProductDetailedInfo.styles';
import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useEditProductMutation,
  useGetProductsQuery,
} from '../../services/Product';
import Error from '../error/Error';
import { ProductDetail } from '~/@types/Product';

const ProductDetailedInfo = () => {
  const { id = 1 } = useParams();
  const navigate = useNavigate();
  const {
    data,
    error,
    isLoading,
    isFetching: isFetching,
  } = useGetProductsQuery(`/products/${id}`);
  const titleText = useRef();

  const product = data as ProductDetail;
  const [open, setOpen] = React.useState(false);
  const [validationError, setValidationError] = useState<string>('');

  const [updateTitle] = useEditProductMutation();

  const handleUpdate = async () => {
    const { value: title } = titleText.current;
    if (title.length) {
      const data = {
        id: product.id,
        title,
      };
      const { error } = await updateTitle(data);
      if (error?.data?.message?.length) {
        setValidationError(error?.data?.message);
      } else {
        setOpen(false);
        setValidationError('');
      }
    } else {
      setValidationError('Cant be Blank');
    }
  };

  const handleClose = () => {
    setValidationError('');
    setOpen(false);
  };

  if (error) {
    return <Error owner={true} />;
  }
  if (isFetching || isLoading) {
    return <LinearProgress style={{ margin: 100 }} />;
  }
  return (
    <Wrapper>
      <img src={product.imageUrl} alt={product.title} />
      <Title onClick={() => setOpen(true)}>
        <h3>Title</h3>
        <p>{product.title}</p>
      </Title>
      <div>
        <h3>price</h3>
        <p>€{product.price}</p>
      </div>

      <Grid container justifyContent={'flex-start'}>
        <h3>description</h3>
        <p>{product.description}</p>
      </Grid>
      <div>
        <h3>Discounts {product.discount?.id ? 'Available' : 'Unavailable'} </h3>
      </div>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={2}>
          <Button variant="outlined" onClick={() => navigate('/admin')}>
            Back
          </Button>
        </Grid>
      </Grid>
      <Dialog
        disableEnforceFocus
        fullWidth
        open={open}
        onClose={() => handleClose()}
      >
        <DialogTitle>Update Product Title</DialogTitle>
        <DialogContent>
          <DialogContentText>{product.type}</DialogContentText>
          <TextField
            inputRef={titleText}
            error={validationError.length > 0}
            helperText={validationError}
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default ProductDetailedInfo;
