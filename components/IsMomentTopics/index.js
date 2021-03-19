import { useContext } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import { TopicsContext } from 'hooks/useTopics';
import * as Styled from './styles';
import qs from 'qs';

const requiredNumberOfSelectedTopics = 3;

const fetchQuestions = (apiTerms) => {
  const { data } = useSWR('/api/policies/questions', () =>
    fetch(`${process.env.api.policiesUrl}/questions?${apiTerms}`).then((data) =>
      data.json(),
    ),
  );
  return data?.data;
};

export default function IsMomentTopics() {
  const { userSelectedTopics } = useContext(TopicsContext);

  const apiTerms = qs.stringify({ topics: userSelectedTopics });

  const questions = fetchQuestions(apiTerms) || {};

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <Styled.GoBackButton to="/presidential-steps/1" text="Regresa" />
        </Styled.Row>
        <Styled.Stepper steps="1" of="3" />
        <Styled.Title>Es momento del test</Styled.Title>
        <Styled.SubTitle>Te haremos preguntas por cada pilar.</Styled.SubTitle>
        <Styled.SubTitle>
          Si no deseas responder una de ellas, podrás omitirla.
        </Styled.SubTitle>
        <Styled.TopicList>
          {userSelectedTopics.length ? (
            userSelectedTopics.map((topic, index) => (
              <Styled.TopicListGroupItem
                key={`Topic-${index}`}
                type={topic}
                questions={questions}>
                {topic}
              </Styled.TopicListGroupItem>
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
        </Styled.TopicList>
      </Styled.Step>
    </Styled.Container>
  );
}
