import styled from 'styled-components';
import Image from 'next/image';

export const ChipIcon = (props) => <Image height="20" width="20" {...props} />;

export const Chip = styled('aside')`
  align-items: center;
  background-color: #fcf7cf;
  border: 1px solid #ebe6b3;
  border-radius: 4px;
  color: #82792D;
  display: flex;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  font-size: .75rem;
  gap: .75rem;
  height: 3rem;
  line-height: 1.125rem;
  justify-content: center;
  padding: .875rem 1.125rem;
`;
