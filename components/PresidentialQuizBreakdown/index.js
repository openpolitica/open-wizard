import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import Loading from 'components/Loading';
import * as Styled from './styles';
import qs from 'qs';
import { useTopics } from 'hooks/useTopics';
import MainLayout from 'components/layouts/MainLayout';

const requiredNumberOfSelectedTopics = 1;

const LoadingScreen = () => {
  return (
    <MainLayout>
      <Loading />
    </MainLayout>
  );
};

const fetchQuestions = (apiTerms) =>
  fetch(`${process.env.api.policiesUrl}/questions?${apiTerms}`).then((data) =>
    data.json(),
  );

export default function PresidentialQuizBreakdown() {
  const { userSelectedTopics, addQuizItems } = useTopics();
  const apiTerms = qs.stringify({ topics: userSelectedTopics });
  const { data: response, error, isLoading } = useSWR(
    '/api/policies/questions',
    () => fetchQuestions(apiTerms),
  );
  const questions = response?.data;

  useEffect(() => {
    addQuizItems(questions);
  }, [questions]);

  if (error) {
    // Todo: Add Error component
    return <p>Error: {error}</p>;
  }
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (Object.keys(questions || {}).length) {
    return (
      <MainLayout>
        <Styled.Row>
          <Styled.GoBackButton to="/presidential-steps/1" text="Regresa" />
        </Styled.Row>
        <Styled.Title>Es momento del test</Styled.Title>
        <Styled.SubTitle>
          Te haremos preguntas por cada pilar. Si no deseas responder una de
          ellas, podrás no responder.
        </Styled.SubTitle>
        <Styled.QuizBreakdown>
          {userSelectedTopics.length ? (
            userSelectedTopics.map((topic, index) => (
              <Styled.QuizBreakdownItem
                key={`Topic-${index}`}
                type={topic}
                questions={questions}>
                {topic}
              </Styled.QuizBreakdownItem>
            ))
          ) : (
            <Styled.SubTitle>Ningún tópico seleccionado</Styled.SubTitle>
          )}
          <Styled.Button
            type={
              userSelectedTopics.length < requiredNumberOfSelectedTopics
                ? 'disabled'
                : 'primary'
            }
            disabled={
              userSelectedTopics.length < requiredNumberOfSelectedTopics
            }
            onClick={() => Router.push('/presidential-steps/3')}
            text="Continuar"
          />
        </Styled.QuizBreakdown>
      </MainLayout>
    );
  }
  return null;
}
