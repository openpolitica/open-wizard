import styled from 'styled-components';
import BaseImage from 'next/image';
import * as icons from 'public/images/icons/topics/';

export const iconMap = Object.entries(icons)
  .map(([iconName, Icon]) => ({
    [iconName]: styled(Icon)`
      ${(props) =>
        props.checked
          ? `path {
     fill: #5BC13E;
     stroke: #5BC13E;
   }`
          : `path {
     fill: #C7CAD1;
     stroke: #C7CAD1;
   }`}
    `,
  }))
  .reduce(
    (accumulator, current) => ({
      ...accumulator,
      [Object.keys(current)[0]]: Object.values(current)[0],
    }),
    {},
  );

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
