import styled from 'styled-components';

const IconButton = styled('button')`
  border: none;
  border-radius: 1.3125rem;
  cursor: pointer;
  height: 2.625rem;
  line-height: 2.625rem;
  margin: 0;
  transform: perspective(0) translateZ(0);
  width: 2.625rem;

  &:hover {
    transform: perspective(500px) translateZ(42px);
  }
`;

const StyledYesButton = styled(IconButton)`
  background-color: #c1e8e1;
`;

export const YesButton = (props) => (
  <StyledYesButton {...props}>
    <img src="../images/icons/swoosh.svg" />
  </StyledYesButton>
);

const StyledNoButton = styled(IconButton)`
  background-color: #fbd4d4;
  padding-top: 0.25rem;
`;

export const NoButton = (props) => (
  <StyledNoButton {...props}>
    <img src="../images/icons/x.svg" />
  </StyledNoButton>
);

export const StyledYesNoButton = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 6.25rem;
`;
