import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  top: 0;
  margin-top: 1000px;
  align-self: center;
  margin-top: 10%;
  padding-top: 10%;
`;
