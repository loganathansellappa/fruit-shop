import React from 'react';
import { Wrapper } from './OrderConfirmation.styles';
import { Grid } from '@mui/material';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Grid xs={12} container flexDirection={'column'} alignItems={'center'}>
        <h1>Your order has been placed successfull!</h1>
        <Button
          variant="outlined"
          onClick={() => navigate('/')}
          style={{ justifySelf: 'flex-end', backgroundColor: 'green' }}
        >
          Go Home!
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default OrderConfirmation;
