import styled, { keyframes } from 'styled-components';

export const Loading = styled('section')`
  height: 100vh;
  line-height: 50vh;
  text-align: center;
  width: 100vw;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled('img')`
  animation: ${rotate} 2s linear infinite;
`;
