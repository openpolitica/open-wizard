import styled from 'styled-components';

export const Title = styled('h2')`
  color: #04102f;
  font-family: 'Poppins', sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
