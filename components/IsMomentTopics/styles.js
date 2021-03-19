import styled from 'styled-components';
import BaseHeader from 'components/Header';
import BaseGoBackButton from 'components/GoBackButton';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
import BaseTopicCheckbox from 'components/TopicCheckbox';
import BaseButton from 'components/BaseButton';
import ListGroupItem from 'components/BaseListGroupItem';

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

export const GoBackButton = styled(BaseGoBackButton)`
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const Step = styled('div')`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 1.5rem;
`;

export const Stepper = styled(BaseStepper)`
  margin-top: 1.5rem;
`;

export const Title = styled(BaseTitle)`
  margin-top: 2rem;
  text-align: center;
`;

export const SubTitle = styled(BaseParagraph)`
  margin-top: 0.75rem;
  text-align: center;
`;

export const Topics = styled('section')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4375rem;
  justify-content: center;
  margin: 1rem 0 2rem;
  width: 20.5rem;
`;

export const TopicList = styled('ul')`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  width: 20rem;
`;

export const TopicListGroupItem = styled(ListGroupItem)`
  align-items: center;
  background-color: #ffffff;
  border: 0.1rem solid rgba(0, 0, 0, 0.125);
  display: flex;
  height: 3.5rem;
  justify-content: start;
  margin-bottom: -1px;
  padding: 0.75rem 1.25rem;
  position: relative;
`;

export const TopicCheckbox = BaseTopicCheckbox;

export const Button = styled(BaseButton)`
  margin: 1.5rem auto 0;
`;
