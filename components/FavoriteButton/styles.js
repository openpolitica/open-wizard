import styled from 'styled-components';
import { StyledButton } from 'components/BaseButton/styles';

export const Button = styled(StyledButton)`
  align-items: center;
  display: flex;
  font-size: 0.875rem;
  height: auto;
  justify-content: space-around;
  min-width: 5.625rem;
  padding: 0.5rem 1rem;
`;

export const Icon = styled('img')`
  margin-right: 0.625rem;
`;
