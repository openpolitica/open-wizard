import styled from 'styled-components';
import BaseButton from 'components/BaseButton';
import BaseParagraph from 'components/BaseParagraph';
import BaseChip from 'components/Chip';

export const QuestionTopic = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;
export const QuestionTopicIcon = styled('svg')`
  color: #5bc13e;
  margin-right: 0.25rem;
  transform: scale(0.7);
  path {
    fill: currentColor;
    stroke: currentColor;
  }
`;
export const QuestionTopicName = styled('p')`
  font-weight: 600;
  &:first-letter {
    text-transform: capitalize;
  }
`;
export const QuestionCounter = styled('span')`
  font-weight: 300;
  margin-left: 0.3125rem;
`;
export const QuestionTitle = styled('h3')`
  font-size: 1.125rem;
  line-height: 1.625rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const QuestionInstructions = styled(BaseParagraph)`
  margin-bottom: 1rem;
  text-align: center;
`;
export const QuestionList = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
`;

export const QuestionButtons = styled('div')`
  align-items: center;
  display: flex;
`;
export const NextButton = styled(BaseButton)`
  margin-left: 0.85rem;
  min-width: 9.8125rem;
`;
export const OmitButton = styled(BaseButton)`
  background: #ffffff;
  border: 1px solid #1f1f1f;
  min-width: 9.8125rem;
  &:disabled {
    opacity: 0.4;
    &:hover {
      cursor: auto;
      text-decoration: none;
    }
  }
`;
export const NoQuestionChip = styled(BaseChip)`
  margin: 0 auto;
`;
