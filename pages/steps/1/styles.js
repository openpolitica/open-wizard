import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
import BaseSelect from 'components/BaseSelect';
import BaseLinkButton from 'components/LinkButton';
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
  padding: 0 3.25rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
`;

export const Paragraph = styled(BaseParagraph)`
  margin-top: 0.5rem;
`;

export const Select = styled(BaseSelect)`
  margin-top: 1.5rem;
`;

export const LinkButton = styled(BaseLinkButton)`
  margin-top: 1rem;
`;

export const Button = styled(BaseButton)`
  align-self: flex-end;
  margin: 13.125rem 1.5rem 0 0;
`;
