import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  border: 1px solid lightblue;
  border-radius: 20px;
  transform: translate(10%, 10%);

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  button {
    max-width: 200px;
    background-color: blue;
    color: white;
    &:hover {
      background-color: green;
    }
  }
`;

export const Title = styled.div`
:hover {
   background-color: green;
  cursor: pointer;
  color: #fff;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

 @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
`;
