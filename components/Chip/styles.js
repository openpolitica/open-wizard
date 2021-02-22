import styled from 'styled-components';
import Image from 'next/image';

export const WrapperImg = styled('div')`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

export const ChipIcon = (props) => (
  <WrapperImg>
    <Image layout="fill" objectFit="cover" {...props} />
  </WrapperImg>
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
  max-width: 20.437rem;
  min-height: 2.875rem;
  justify-content: center;
  line-height: 1.125rem;
  padding: 0.875rem 1.125rem;
`;
