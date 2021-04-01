import styled from 'styled-components';

export const Checkbox = styled('label')`
  color: #475065;
  cursor: pointer;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: min-content auto;
  margin-bottom: 1rem;
`;
export const CheckboxInput = styled('span')`
  display: flex;
`;
export const CheckboxLabel = styled('span')`
  color: #475065;
  font-size: 0.875rem;
  line-height: 1.375rem;
`;
export const CheckboxControl = styled('span')`
  border: 0.125rem solid currentColor;
  border-radius: 4px;
  color: #dedede;
  display: block;
  height: 1.5rem;
  transform: translateY(0.06rem);
  width: 1.5rem;
`;
export const Input = styled('input')`
  height: 0;
  opacity: 0;
  width: 0;
  &:checked + ${CheckboxControl} {
    background: url(../images/icons/swoosh-checkbox.svg) no-repeat center center;
    color: #96dc8c;
  }
`;
