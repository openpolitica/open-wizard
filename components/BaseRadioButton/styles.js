import styled from 'styled-components';

export const Radio = styled('label')`
  color: #475065;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: min-content auto;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const RadioInput = styled('span')`
  display: flex;
`;
export const RadioLabel = styled('span')`
  color: #475065;
  font-size: 0.875rem;
  line-height: 1.375rem;
`;
export const RadioControl = styled('span')`
  border-radius: 50%;
  border: 0.125rem solid currentColor;
  color: #ccc;
  display: block;
  height: 1.5rem;
  transform: translateY(0.06rem);
  width: 1.5rem;
`;
export const Input = styled('input')`
  height: 0;
  opacity: 0;
  width: 0;
  &:checked + ${RadioControl} {
    color: #5bc13e;
    background: radial-gradient(currentcolor 50%, rgba(255, 0, 0, 0) 0%);
  }
`;
