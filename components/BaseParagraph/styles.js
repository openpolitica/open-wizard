import styled from 'styled-components';

export const Paragraph = styled('p')`
  color: #72798b;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
