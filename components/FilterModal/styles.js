import styled from 'styled-components';

export const Header = styled('header')`
  display: flex;
  border: 1px solid #f1f2f3;
  height: 3.875rem;
`;

export const CloseButton = styled('button')`
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1.5rem;
`;

export const GenreSection = styled('section')`
  border-bottom: 1px solid #f1f2f3;
  height: 7.125rem;
  padding: 1.5rem;
`;

export const FilterTitle = styled('h2')`
  color: #04102f;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0 0 0.5rem 0;
`;

export const Tag = styled('input').attrs((props) => ({
  type: 'checkbox',
}))`
  appearance: none;
`;

export const TagLabel = styled('label')`
  appearance: none;
  background: ${(props) =>
    props.checked ? 'rgba(78, 181, 162, 0.08)' : '#F2F2F2'};
  border-radius: 100px;
  color: ${(props) => (props.checked ? '#4eb5a2' : '#72798B')};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0.375rem 1rem;
  -webkit-tap-highlight-color: transparent;
`;

export const ModalSection = styled('section')`
  border-bottom: 1px solid #f1f2f3;
  padding: 1.5rem;

  &:last-child {
    border-radius: 4px;
  }
`;

export const CheckboxRow = styled('div')`
  align-items: center;
  display: flex;
  margin-bottom: 0.75rem;
`;

export const Checkbox = styled('input').attrs((props) => ({
  type: 'checkbox',
}))`
  appearance: none;
  background: #fafafa;
  border: 1px solid #c7cad1;
  border-radius: 2px;
  cursor: pointer;
  height: 1.375rem;
  outline: none;
  position: relative;
  width: 1.375rem;

  ${(props) =>
    props.isChecked
      ? `&::after {
    background: url(../images/icons/swoosh-checkbox.svg) no-repeat center center;
    content: '';
    height: 1.375rem;
    left: calc(50% + 0.0625rem);
    position: absolute;
    top: -0.0625rem;
    transform: translateX(-50%);
    width: 1.375rem;
  }`
      : ''}
`;

export const CheckboxLabel = styled('label')`
  appearance: none;
  color: #72798b;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  width: 14.75rem;
`;
