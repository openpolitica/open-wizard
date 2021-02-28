import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseTitle from 'components/BaseTitle';
import BaseCandidateCard from 'components/CandidateCard';
import BaseButton from 'components/BaseButton';

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

// Todo: make it sticky / position-absoluted when needed
export const KeepLookingButton = styled((props) => (
  <BaseButton type="secondary" {...props} />
))`
  margin-top: 1.25rem;
`;
