import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
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

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const ResultExplanation = styled(BaseParagraph)`
  align-self: start;
  color: #04102F;
  font-size: .875rem;
  font-weight: 700;
  margin: 1.5rem 0 .5rem 0;
`;

export const Location = styled('span')`
  color: #4EB5A2;
  text-transform: capitalize;
`;

export const ResultInstructions = styled(BaseParagraph)`
`;

export const Candidates = styled('section')`
  margin-top: 1.5rem;
`;

export const CandidateCard = styled(BaseCandidateCard)`
  margin-bottom: .5rem;
`;
