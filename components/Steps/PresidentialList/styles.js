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
  flex-direction: column;
  display: flex;
  padding: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  font-size: 1.125rem;
  margin-top: 2em;
`;

export const EmphasizedTitle = styled(Title)`
  color: #4eb5a2;
  margin-top: 0;
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
