import styled from 'styled-components';
import Image from 'next/image';

export const Photo = styled(Image)`
  border-radius: 2.5rem;
  margin-bottom: 0.5rem;
  object-fit: cover;
`;

export const Name = styled.p`
  color: #475065;
  font-size: 0.818rem;
  font-weight: 600;
  margin: 0;
  margin-top: 0.5rem;
`;

export const Role = styled.p`
  color: #475065;
  font-size: 0.818rem;
  font-weight: normal;
  margin: 0;
  margin-top: 0.25rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;
