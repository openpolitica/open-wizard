import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseTitle from 'components/BaseTitle';
import BaseChip from 'components/Chip';
import BaseFilterButton from 'components/FilterButton';

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
  padding: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FilterButton = styled(BaseFilterButton)`
  align-self: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 0 1rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const Chip = styled(BaseChip)`
  margin-top: 1rem;
`;

export const NoCandidatesChip = styled(BaseChip)`
  justify-content: flex-start;
  margin-top: 0.5rem;
  width: 100%;
`;

export const Results = styled('section')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4375rem;
  margin-top: 1rem;
  width: 20.5rem;
`;
