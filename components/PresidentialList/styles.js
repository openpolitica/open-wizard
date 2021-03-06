import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseTitle from 'components/BaseTitle';
import BaseCandidateCard from 'components/CandidateCard';

export const Container = styled('section')`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled(BaseHeader)`
  width: 100%;
`;

export const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Step = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  font-size: 1.125rem;
  margin-top: 2em;
`;

export const EmphasizedTitle = styled(Title)`
  color: #5bc13e;
  margin-top: 0;
`;

export const ExternalLink = styled('a')`
  align-items: center;
  align-self: flex-start;
  color: #5bc13e;
  display: flex;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
export const ExternalLinkText = styled('span')`
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

export const Subtitle = styled('p')`
  color: #475065;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: bold;
  margin: 1.5rem 0 0.5rem 0;
`;

export const CandidateSingle = styled('div')`
  margin-bottom: 0.5rem;
`;

export const CandidateCard = styled(BaseCandidateCard)`
  margin-bottom: 0.5rem;
`;
