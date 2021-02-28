import styled from 'styled-components';
import Image from 'next/image';

export const ChipCanvas = styled('div')`
  height: 1.25rem;
  margin-right: 0.5rem;
  position: relative;
  flex: 0 0 1.25rem;
`;

export const ChipIcon = (props) => (
  <ChipCanvas>
    <Image layout="fill" objectFit="cover" {...props} />
  </ChipCanvas>
);

const backgroundColorPriority = {
  good: '#F3F8F7',
  info: '#FCF7CF',
  bad: '#FDF4F4',
};

const borderColorPriority = {
  good: '#CEE6E1',
  info: '#EBE6B3',
  bad: '#F9D5D5',
};

const textColorPriority = {
  good: '#338C7C',
  info: '#82792D',
  bad: '#C41E1E',
};

export const Chip = styled('aside')`
  align-items: flex-start;
  background-color: ${(props) => backgroundColorPriority[props.type || 'info']};
  border-radius: 4px;
  border: 1px solid ${(props) => borderColorPriority[props.type || 'info']};
  color: ${(props) => textColorPriority[props.type || 'info']};
  display: flex;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  justify-content: flex-start;
  line-height: 1.125rem;
  max-width: 20.437rem;
  min-height: 2.875rem;
  padding: 0.875rem 1.125rem;
`;
