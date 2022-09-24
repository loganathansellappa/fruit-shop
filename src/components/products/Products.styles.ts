import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(IconButton)`
  z-index: 100;
  right: -50px;
  top: 0px;
  display: flex;
  width: 100px;
  align-self: flex-end;
`;

export const Paginate = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 30px;
  margin: 100px;
`;
