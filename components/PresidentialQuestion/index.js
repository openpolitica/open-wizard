import * as Styled from './styles';
import { Fragment, useEffect, useState } from 'react';
import BaseRadioButton from 'components/BaseRadioButton';
import RadioGroup from 'components/BaseRadioButton/RadioGroup';
import BaseButton from 'components/BaseButton';
import CheckboxGroup from 'components/BaseCheckbox/CheckboxGroup';
import BaseCheckbox from 'components/BaseCheckbox';
import * as icons from 'public/images/icons/topics';
import { useTopics } from 'hooks/useTopics';
import { useRouter } from 'next/router';
import { translationMap } from 'components/TopicCheckbox';
import { GoBackButton } from 'components/PresidentialTopics/styles';
import MainLayout from 'components/layouts/MainLayout';

const allowOmittedQuestionsPerTopic = 1;

const nameCapitalized = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default function PresidentialQuestion() {
  const [selectedOption, setSelectedOption] = useState({
    answerId: '',
    answers: new Set(),
  });

  const [currentTopic, setCurrentTopic] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [questionsOmitted, setQuestionsOmitted] = useState(0);

  const router = useRouter();
  const { addUserAnswers, quizItems } = useTopics();

  const questionBank = Object.entries(quizItems);
  const topicLabel = questionBank[currentTopic]?.[0] ?? '';
  const questionList = questionBank[currentTopic]?.[1] ?? [];
  const questionListLength = questionList.length;
  const questionId = questionList[currentQuestionIdx]?.question?.id;

  const isLowerThanLastQuestionIdx =
    currentQuestionIdx < questionListLength - 1;
  const isLastCurrentQuestionIdx =
    currentQuestionIdx === questionListLength - 1;
  const isLastCurrentTopicIdx = currentTopic === questionBank.length - 1;

  const questionHasMultipleOptions = !!questionList[currentQuestionIdx]
    ?.question?.isMultiple;

  const handleNextButton = ({ isOmitted = false } = {}) => {
    const selectedAnswers = Array.from(selectedOption.answers)?.length
      ? Array.from(selectedOption.answers)
      : null;

    if (isOmitted) {
      setQuestionsOmitted((prevIdx) => prevIdx + 1);
    }
    if (isLowerThanLastQuestionIdx) {
      addUserAnswers({
        questionId,
        answerId: isOmitted ? null : selectedOption.answerId,
        answers: isOmitted ? null : selectedAnswers,
      });
      setCurrentQuestionIdx((prevIdx) => prevIdx + 1);
    }
    if (isLastCurrentQuestionIdx && !isLastCurrentTopicIdx) {
      setQuestionsOmitted(0);
      setCurrentTopic((prevIdx) => prevIdx + 1);
      setCurrentQuestionIdx(0);
      addUserAnswers({
        questionId,
        answerId: isOmitted ? null : selectedOption.answerId,
        answers: isOmitted ? null : selectedAnswers,
      });
    }
    if (isLastCurrentQuestionIdx && isLastCurrentTopicIdx) {
      addUserAnswers({
        questionId,
        answerId: isOmitted ? null : selectedOption.answerId,
        answers: isOmitted ? null : selectedAnswers,
      });
      router.push('/presidential-results/grouped-by-compatibility');
    }
  };

  const isUpperThanFirstQuestionIdx = currentQuestionIdx > 0;
  const isFirstCurrentQuestionIdx = currentQuestionIdx === 0;
  const isFirstCurrentTopicIdx = currentTopic === 0;

  const handlePreviousButton = () => {
    if (!questionListLength) {
      router.push('/presidential-steps/1');
      return;
    }
    if (isUpperThanFirstQuestionIdx) {
      setCurrentQuestionIdx((prevIdx) => prevIdx - 1);
    }
    if (isFirstCurrentQuestionIdx && !isFirstCurrentTopicIdx) {
      setCurrentTopic((prevIdx) => prevIdx - 1);
      const previousList = questionBank[currentTopic - 1]?.[1];
      setCurrentQuestionIdx(previousList.length - 1);
    }
    if (isFirstCurrentQuestionIdx && isFirstCurrentTopicIdx) {
      router.push('/presidential-steps/2');
    }
  };

  const Icon = icons[`${nameCapitalized(topicLabel || '')}Icon`];

  useEffect(() => {
    setSelectedOption({
      answerId: null,
      answers: new Set(),
    });
  }, [currentQuestionIdx]);

  const shouldContinueButtonBeDisabled =
    selectedOption.answerId === null && selectedOption.answers.size === 0;

  return (
    <MainLayout>
      <GoBackButton text="Regresar" onClick={handlePreviousButton} />
      {questionListLength ? (
        <Fragment>
          <Styled.QuestionTopic key="topic">
            {Icon ? <Styled.QuestionTopicIcon as={Icon} /> : null}
            <Styled.QuestionTopicName>
              {translationMap[topicLabel]}
              <Styled.QuestionCounter>
                ({`${currentQuestionIdx + 1}/${questionListLength}`})
              </Styled.QuestionCounter>
            </Styled.QuestionTopicName>
          </Styled.QuestionTopic>
          <Styled.QuestionTitle>
            {questionList[currentQuestionIdx]?.question?.label}
          </Styled.QuestionTitle>
          <Styled.QuestionList>
            {questionHasMultipleOptions ? (
              <CheckboxGroup
                value={selectedOption.answers}
                onChange={(value) =>
                  setSelectedOption({ ...selectedOption, answers: value })
                }>
                {questionList[currentQuestionIdx]?.answers.map((answer) => (
                  <BaseCheckbox
                    key={answer.id}
                    value={answer.id}
                    forceSingle={!!answer.forceSingle}>
                    {answer.label}
                  </BaseCheckbox>
                ))}
              </CheckboxGroup>
            ) : (
              <RadioGroup
                value={selectedOption.answerId}
                onChange={(value) =>
                  setSelectedOption({ ...selectedOption, answerId: value })
                }>
                {questionList[currentQuestionIdx]?.answers.map((answer) => (
                  <BaseRadioButton key={answer.id} value={answer.id}>
                    {answer.label}
                  </BaseRadioButton>
                ))}
              </RadioGroup>
            )}
          </Styled.QuestionList>
          <Styled.QuestionButtons>
            <BaseButton
              type={shouldContinueButtonBeDisabled ? 'disabled' : 'primary'}
              disabled={shouldContinueButtonBeDisabled}
              onClick={handleNextButton}>
              Continuar
            </BaseButton>
            <Styled.OmitButton
              disabled={questionsOmitted === allowOmittedQuestionsPerTopic}
              onClick={() => handleNextButton({ isOmitted: true })}
              type="transparent">
              Omitir
            </Styled.OmitButton>
          </Styled.QuestionButtons>
        </Fragment>
      ) : (
        <Styled.NoQuestionChip type="bad">
          No se encontró la banca de preguntas. Por favor, selecciona tus temas
          y prueba de nuevo.
        </Styled.NoQuestionChip>
      )}
    </MainLayout>
  );
}
