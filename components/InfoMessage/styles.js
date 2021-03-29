import styled from 'styled-components';

export const InfoMessage = styled('p')`
  color: #8e94a4;
  font-family: 'Poppins', sans-serif;
  font-size: 0.765rem;
  line-height: 1.14rem;
  margin: 0;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
