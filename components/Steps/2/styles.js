import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseButton from 'components/BaseButton';

export const Container = styled('section')`
  align-items: center;
  background: #F1F2F3;
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
  padding: 0 3.25rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const ButtonTop = styled(BaseButton)`
  align-self: center;
  margin: 13.125rem 0 0 0;
`;

export const ButtonBottom = styled(BaseButton)`
  align-self: center;
  margin: 1rem 0 0 0;
`;
