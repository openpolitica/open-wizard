import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const Loading = styled('section')`
  line-height: 2rem;
  margin: 11.25rem auto;
  overflow: hidden;
  position: relative;
  width: 5.625rem;
`;

const rotate = keyframes`
  0% {width:100%}
  40% {width:0%}
  60% {width:0%;}
  100% {width:100%;}
`;

export const FadingEffect = styled('div')`
  animation: ${rotate} 5s ease alternate infinite;
  background: #f1f2f3;
  bottom: 50%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  -moz-animation: ${rotate} 5s ease-in alternate infinite;
  -webkit-animation: ${rotate} 5s ease-in alternate infinite;
  -ms-animation: ${rotate} 5s ease-in alternate infinite;
  -o-animation: ${rotate} 5s ease-in alternate infinite;
`;

export const Loader = styled(Image)``;
