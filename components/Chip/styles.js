import styled from 'styled-components';
import Image from 'next/image';

export const ChipIcon = (props) => <Image height="15" width="15" {...props} />;

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
  align-items: center;
  background-color: ${(props) => backgroundColorPriority[props.type || 'info']};
  border-radius: 4px;
  border: 1px solid ${(props) => borderColorPriority[props.type || 'info']};
  color: ${(props) => textColorPriority[props.type || 'info']};
  display: flex;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  gap: 0.75rem;
  height: 3rem;
  justify-content: center;
  line-height: 1.125rem;
  padding: 0.875rem 1.125rem;
`;
