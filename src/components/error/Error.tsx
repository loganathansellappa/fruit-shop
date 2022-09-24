import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './Error.styles';
import { Grid } from '@mui/material';
import { Button, Typography } from '@material-ui/core';

interface ErrorProps {
  owner?: boolean;
  message?: string;
}
const Error = ({ owner = false }: ErrorProps) => {
  const navigate = useNavigate();
  const homeUrl = !owner ? '/' : '/admin';
  return (
    <Wrapper>
      <Grid xs={12} container flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h4'}>Something Went wrong</Typography>
        <Typography variant={'subtitle1'}>
          Sorry, it&apos;s us, not you.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate(homeUrl)}
          style={{ justifySelf: 'flex-end', backgroundColor: 'green' }}
        >
          Go Home!
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default Error;
