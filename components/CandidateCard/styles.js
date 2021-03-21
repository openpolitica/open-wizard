import styled from 'styled-components';
import Image from 'next/image';

const borderPriority = {
  primary: '#e3e5e8',
  secondary: '#4EB5A2',
};

export const PartyIcon = styled(Image).attrs((props) => ({
  height: 32,
  width: 32,
}))`
  border-radius: 2px;
  object-fit: contain;
`;

export const NumberIcon = styled('span')`
  border: 1px solid #c7cad1;
  border-radius: 2px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  height: 2rem;
  line-height 2rem;
  margin: 0 0.25rem;
  text-align: center;
  width: 2rem;
`;

export const ProfileIcon = PartyIcon;

export const Card = styled('div')`
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${(props) => borderPriority[props.type || 'primary']};
  cursor: pointer;
  display: flex;
  height: 3.75rem;
  justify-content: flex-start;
  padding: 0.875rem;
  position: relative;
  width: 20.5rem;
`;

export const Fullname = styled('p')`
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0 0 0 0.5rem;
  text-transform: capitalize;

  ${Card}:hover & {
    text-decoration: underline;
  }
`;

export const ArrowCircle = styled('div')`
  background: #f3f8f7 url('/images/icons/right-arrow.svg') no-repeat center;
  border-radius: 100%;
  height: 1.5rem;
  position: absolute;
  right: 1rem;
  width: 1.5rem;
`;
