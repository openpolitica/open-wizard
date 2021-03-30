import styled from 'styled-components';

const backgroundColorPriority = {
  primary: '#04102F',
  secondary: '#4EB5A2',
  transparent: 'transparent',
  disabled: '#8E94A4',
};

const borderColorPriority = {
  primary: 'none',
  secondary: 'none',
  transparent: '#04102F',
  disabled: 'none',
};

const borderWidthPriority = {
  primary: '0px',
  secondary: '0px',
  transparent: '1px',
  disabled: '0px',
};

const textColorPriority = {
  primary: 'white',
  secondary: 'white',
  transparent: '#04102F',
  disabled: 'white',
};

export const StyledButton = styled('button')`
  background-color: ${(props) =>
    backgroundColorPriority[props.color || 'primary']};
  border-color: ${(props) => borderColorPriority[props.color || 'primary']};
  border-radius: 2rem;
  border-width: ${(props) => borderWidthPriority[props.color || 'primary']};
  color: ${(props) => textColorPriority[props.color || 'primary']};
  cursor: ${(props) => (props.color === 'disabled' ? 'auto' : 'pointer')};
  font-family: 'Roboto', sans-serif;
  height: 3rem;
  min-width: 7.375rem;
  padding: 0 1.5rem;

  &:hover {
    text-decoration: ${(props) =>
      props.color === 'disabled' ? 'none' : 'underline'};
  }
`;
