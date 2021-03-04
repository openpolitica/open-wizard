import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseTitle from 'components/BaseTitle';
import BaseChip from 'components/Chip';
import BaseFilterButton from 'components/FilterButton';
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
  flex-direction: column;
  display: flex;
  padding: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FilterButton = styled(BaseFilterButton)`
  align-self: flex-end;
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

export const SeeFavoritesButton = styled((props) => (
  <BaseButton type="secondary" {...props} />
))`
  margin-top: 0.875rem;
`;
