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
  height: 100%;
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
  flex: 2;
  display: flex;
  padding: 0 1.5rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Chip = styled(BaseChip)`
  margin-top: 1.5rem;
`;

export const TextInfo = styled.p`
  margin: 0;
`;

export const Title = styled(BaseTitle)`
  font-size: 1.125rem;
  margin: 2rem 0;
`;
export const YesNoButtons = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const NoButton = styled(BaseButton)`
  align-self: center;
`;

export const YesButton = styled(BaseButton)`
  align-self: center;
  margin: 1rem 0 0 0;
`;
