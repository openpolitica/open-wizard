import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
import BaseSelect from 'components/BaseSelect';
import BaseLinkButton from 'components/LinkButton';
import BaseButton from 'components/BaseButton';
import BaseGoBackButton from 'components/GoBackButton';
import BaseChip from 'components/Chip';

export const Container = styled('section')`
  align-items: center;
  background: #f1f2f3;
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
  flex: 1;
  flex-direction: column;
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
  margin-top: 2rem;
`;

export const Select = styled(BaseSelect)`
  cursor: pointer;
  margin-top: 1.5rem;
`;

export const LinkButton = styled(BaseLinkButton)`
  cursor: pointer;
  margin-top: 1rem;
`;

export const Button = styled(BaseButton)`
  align-self: center;
  background-color: ${(props) => (props.disabled ? 'grey' : 'auto')};
  margin-bottom: 5rem;
  &:hover {
    text-decoration: ${(props) => (props.disabled ? 'none' : 'underline')};
  }
`;
