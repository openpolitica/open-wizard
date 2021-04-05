import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
import BaseCandidateCard from 'components/CandidateCard';
import BaseFilterButton from 'components/FilterButton';
import Chip from 'components/Chip';

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

export const FilterButton = styled(BaseFilterButton)`
  align-self: center;
  font-size: 0.875rem;
  margin: 1rem 0 0.5rem 0;
  padding: 0 1rem;
`;

export const Step = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const Emphasis = styled('em')`
  color: #4eb5a2;
  font-style: normal;
`;

export const ResultExplanation = styled(BaseParagraph)`
  align-self: start;
  color: #04102f;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 1.5rem 0 0.5rem 0;
`;

export const Location = styled('span')`
  color: #4eb5a2;
  text-transform: capitalize;
`;

export const ResultInstructions = styled(BaseParagraph)``;

export const Candidates = styled('section')`
  margin-top: 0.5rem;
`;

export const CandidateCard = styled(BaseCandidateCard)`
  margin-bottom: 0.5rem;
`;

export const ChipCard = styled(Chip)`
  margin: 0.5rem 0 0;
`;
