import styled from 'styled-components';

export const GoBackButton = styled.button`
  align-self: end;
  background: transparent;
  color: #04102f;
  display: flex;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  padding: 0.625rem 1rem 0.625rem 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const GoBackIcon = styled.div`
  margin-right: 0.625rem;
`;

export const GobackText = styled.p`
  font-size: 14px;
  margin: 0;
`;
