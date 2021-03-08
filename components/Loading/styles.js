import styled, { keyframes } from 'styled-components';

export const Loading = styled('section')`
  line-height: 2em;
  margin: 180px auto;
  overflow: hidden;
  position: relative;
  width: 90px;
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

export const Loader = styled('img')``;
