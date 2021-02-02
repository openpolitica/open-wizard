import styled from 'styled-components';

const backgroundColorPriority = {
  primary: '#04102F',
  secondary: '#4EB5A2',
  transparent: 'transparent',
};

const borderColorPriority = {
  primary: 'none',
  secondary: 'none',
  transparent: '#04102F',
};

const borderWidthPriority = {
  primary: '0px',
  secondary: '0px',
  transparent: '1px',
};

const textColorPriority = {
  primary: 'white',
  secondary: 'white',
  transparent: '#04102F',
};

export const StyledButton = styled('button')`
  background-color: ${props =>
    backgroundColorPriority[props.type || 'primary']};
  border-color: ${props => borderColorPriority[props.type || 'primary']};
  border-width: ${props => borderWidthPriority[props.type || 'primary']};
  border-radius: 2rem;
  cursor: pointer;
  color: ${props => textColorPriority[props.type || 'primary']};
  font-family: 'Roboto', sans-serif;
  min-width: 7.375rem;
  height: 3rem;
  padding: 0 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
