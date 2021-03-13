import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseTitle from 'components/BaseTitle';

export const Container = styled('section')`
  align-items: center;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;

export const Header = styled(BaseHeader)`
  width: 100%;
`;

export const Content = styled('div')`
  padding: 2.5rem 1.5rem;
`;

export const Title = styled(BaseTitle)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 1rem;
  margin-right: 5rem;
`;

export const Paragraph = styled('p')`
  color: #475065;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const ExternalLink = styled('a')`
  color: #475065;
`;

export const InfoList = styled('ol')`
  padding-left: 24px;
`;
