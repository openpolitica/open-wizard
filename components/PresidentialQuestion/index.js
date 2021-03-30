import * as Styled from './styles';
import { Fragment, useEffect, useState } from 'react';
import BaseRadioButton from 'components/BaseRadioButton';
import RadioGroup from 'components/BaseRadioButton/RadioGroup';
import BaseButton from 'components/BaseButton';
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
  const [selectedOption, setSelectedOption] = useState('');
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

  const handleNextButton = ({ isOmitted = false } = {}) => {
    if (isOmitted) {
      setQuestionsOmitted((prevIdx) => prevIdx + 1);
    }
    if (isLowerThanLastQuestionIdx) {
      addUserAnswers({
        questionId,
        answerId: isOmitted ? '' : selectedOption,
      });
      setCurrentQuestionIdx((prevIdx) => prevIdx + 1);
    }
    if (isLastCurrentQuestionIdx && !isLastCurrentTopicIdx) {
      setQuestionsOmitted(0);
      setCurrentTopic((prevIdx) => prevIdx + 1);
      setCurrentQuestionIdx(0);
      addUserAnswers({
        questionId,
        answerId: isOmitted ? '' : selectedOption,
      });
    }
    if (isLastCurrentQuestionIdx && isLastCurrentTopicIdx) {
      addUserAnswers({
        questionId,
        answerId: isOmitted ? '' : selectedOption,
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
    setSelectedOption('');
  }, [currentQuestionIdx]);

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
            {questionList[currentQuestionIdx]?.answers.map((answer) => (
              <RadioGroup
                key={answer.id}
                value={selectedOption}
                onChange={(value) => setSelectedOption(value)}>
                <BaseRadioButton value={answer.id}>
                  {answer.label}
                </BaseRadioButton>
              </RadioGroup>
            ))}
          </Styled.QuestionList>
          <Styled.QuestionButtons>
            <BaseButton
              color={selectedOption === '' ? 'disabled' : 'primary'}
              disabled={selectedOption === ''}
              onClick={handleNextButton}>
              Continuar
            </BaseButton>
            <Styled.OmitButton
              disabled={questionsOmitted === allowOmittedQuestionsPerTopic}
              onClick={() => handleNextButton({ isOmitted: true })}
              color="transparent">
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
