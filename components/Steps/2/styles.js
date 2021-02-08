import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseButton from 'components/BaseButton';
import BaseGoBackButton from 'components/GoBackButton';
import BaseChip from 'components/Chip';

export const Container = styled('section')`
  align-items: center;
  background: #f1f2f3;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
`;

export const Header = styled(BaseHeader)`
  width: 100%;
`;

export const GoBackButton = styled(BaseGoBackButton)`
  margin-top: 16px;
  margin-left: 16px;
`;
export const Step = styled('div')`
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 0 3.25rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Chip = styled(BaseChip)`
  margin-top: 1.5rem;
  min-height: 6.125rem;
  min-width: 20.437rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const NoButton = styled(BaseButton)`
  align-self: center;
  margin: 13.125rem 0 0 0;
`;

export const YesButton = styled(BaseButton)`
  align-self: center;
  margin: 1rem 0 0 0;
`;
