import styled from 'styled-components';
import BaseGoBackButton from 'components/GoBackButton';
import BaseStepper from 'components/Stepper';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
import BaseTopicCheckbox from 'components/TopicCheckbox';
import BaseButton from 'components/BaseButton';
import BaseQuizBreakdownItem from 'components/BaseQuizBreakdownItem';

export const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const GoBackButton = styled(BaseGoBackButton)``;

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

export const QuizBreakdown = styled('ul')`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  width: 20rem;
`;

export const QuizBreakdownItem = styled(BaseQuizBreakdownItem)`
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
