import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseButton from 'components/BaseButton';
import BaseGoBackButton from 'components/GoBackButton';

export const Container = styled('section')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  flex: 2;
  flex-direction: column;
  display: flex;
  padding: 0 1.5rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  font-size: 1.125rem;
  margin-top: 2rem;
`;

export const YesNoButtons = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 5rem;
`;

export const NoButton = styled(BaseButton)`
  align-self: center;
`;

export const YesButton = styled(BaseButton)`
  align-self: center;
  margin: 1rem 0 0 0;
`;
