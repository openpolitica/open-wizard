import styled, { css } from 'styled-components';

export const StyledButton = styled('button')`
  background-color: #04102f;
  border: none;
  border-radius: 2rem;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  height: 3rem;
  min-width: 7.375rem;
  padding: 0 1.5rem;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    border: none;
    opacity: 0.25;
    &:hover {
      cursor: auto;
      text-decoration: none;
    }
  }

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: #04102f;
      border: none;
      color: #ffffff;
    `}
  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: #4eb5a2;
      border: none;
      color: #ffffff;
    `}
  ${(props) =>
    props.color === 'transparent' &&
    css`
      background-color: transparent;
      border: 1px solid #04102f;
      color: #04102f;
    `}
`;
