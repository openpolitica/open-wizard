import styled from 'styled-components';
import Image from 'next/image';

export const PartyIcon = styled(Image).attrs((props) => ({
  height: 32,
  width: 32,
}))`
  border: 1px solid #c7cad1;
  border-radius: 2px;
`;

export const NumberIcon = styled('span')`
  border: 1px solid #c7cad1;
  border-radius: 2px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  height: 2rem;
  line-height 2rem;
  text-align: center;
  width: 2rem;
`;

export const ProfileIcon = PartyIcon;

export const Fullname = styled('p')`
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0 0 0 0.5rem;
`;

export const Card = styled('div')`
  align-items: center;
  border: 1px solid #c7cad1;
  border-radius: 4px;
  display: flex;
  gap: 0.25rem;
  height: 3.75rem;
  justify-content: flex-start;
  padding: 0.875rem;
  width: 20.5rem;
`;
