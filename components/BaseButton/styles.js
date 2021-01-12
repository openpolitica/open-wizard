import styled from 'styled-components';

const backgroundColorPriority = {
  'primary': '#04102F',
  'secondary': '#4EB5A2',
};

export const StyledButton = styled('button')`
  background-color: ${props => backgroundColorPriority[props.type || 'primary']};
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
  font-family: 'Roboto', sans-serif;
  min-width: 7.375rem;
  height: 3rem;
  padding: 0 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
