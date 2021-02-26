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

export const Step = styled('div')`
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const Candidates = styled('section')`
  margin-top: 0.5rem;
`;

export const CandidateCard = styled(BaseCandidateCard)`
  margin-bottom: 0.5rem;
`;
