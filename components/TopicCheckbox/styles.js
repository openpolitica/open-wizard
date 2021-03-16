import styled from 'styled-components';

export const Label = styled('label')`
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.checked
      ? '0px 4px 8px rgba(0, 0, 0, 0.12)'
      : '0px 2px 2px rgba(0, 0, 0, 0.12)'};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  height: 7rem;
  justify-content: space-evenly;
  width: 9rem;
`;

export const Checkbox = styled('input').attrs((props) => ({
  type: 'checkbox',
}))`
  appearance: none;
  display: none;
`;

export const TopicIcon = styled('svg')`
  color: ${(props) => (props.checked ? '#5BC13E' : '#C7CAD1')};
  path {
    fill: currentColor;
    stroke: currentColor;
  }
`;

export const TopicTitle = styled('span')`
  text-align: center;

  &:first-letter {
    text-transform: capitalize;
  }
`;
