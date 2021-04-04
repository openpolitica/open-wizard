import { useState, useEffect, Fragment } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import orderBy from 'lodash.orderby';
import { useTopics } from 'hooks/useTopics';
import * as Styled from './styles';
import MainLayout from 'components/layouts/MainLayout';
import Loading from 'components/Loading';
import toggleSlug from 'components/PartyCard/toggleSlug';
import comesFromAFinishedPresidentialUserTrip from 'components/PresidentialList/comesFromAFinishedPresidentialUserTrip';
import { translationMap } from 'components/TopicCheckbox';
import PresidentialNoResults from 'components/PresidentialNoResults';

const minimumRequiredNumberOfAnswers = 3;

const capitalize = text => [text[0].toUpperCase(), ...text.slice(1)].join('');

const LoadingScreen = () => {
  return (
    <MainLayout>
      <Loading />
    </MainLayout>
  );
};

const DisclaimerFooter = () => {
  return (
    <Fragment>
      <Styled.HorizontalRule />
      <Styled.Disclaimer>
        <Styled.Tagline>¿Cómo obtuve estos resultados?</Styled.Tagline>
        <Styled.Text1>
          El equipo de{' '}
          <Styled.Link
            href="//openpolitica.com"
            target="_blank"
            rel="noopener noreferrer">
            Open Política
          </Styled.Link>{' '}
          utilizó los planes de gobierno de los{' '}
          <strong>
            10 partidos con mayor intención de voto presidencial al 10 de marzo
            de 2021.
          </strong>
        </Styled.Text1>
        <Styled.Text2>
          Si deseas leer el detalle, puedes descargarlo desde el siguiente
          enlace:
        </Styled.Text2>
        <Styled.DownloadLink
          href="//drive.google.com/drive/folders/1I0SvScSG72M1fxyAuqXPkZK4JLxl1_kQ?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          <Styled.DownloadIcon />
          Descargar reporte en PDF
        </Styled.DownloadLink>
      </Styled.Disclaimer>
    </Fragment>
  );
};

const translateTopics = (topics, translationMap) =>
  topics.map((topic) => translationMap[topic]);

const topicsToTextList = (topics) => (topics.length ? topics.join(', ') : '');

const compatibilityToPercentage = (number) =>
  number ? parseInt(number * 100, 10) : 0;

const fetchResults = (answers) =>
  fetch(process.env.api.resultsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answers }),
  }).then((data) => data.json());

const onByTopicSelectChange = ({
  topic,
  setSortedResults,
  setSelectedTopic,
  results,
}) => {
  setSelectedTopic(topic);
  if (!topic) {
    setSortedResults(
      orderBy(results, ['compatibility', 'name'], ['desc', 'asc']),
    );
    return;
  }
  setSortedResults(
    orderBy(
      results,
      [`compatibility_per_topic[${topic}]`, 'name'],
      ['desc', 'asc'],
    ),
  );
};

export default function PresidentialResults() {
  const { userAnswers, userSelectedTopics } = useTopics();
  const [sortedResults, setSortedResults] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const filteredAnswers = userAnswers.filter((answer) => {
    return answer?.answerId || answer?.answers;
  });

  if (filteredAnswers.length < minimumRequiredNumberOfAnswers) {
    return (
      <MainLayout>
        <PresidentialNoResults />
        <DisclaimerFooter />
      </MainLayout>
    );
  }

  const { data: response, error, isLoading } = useSWR(
    '/api/policies/results',
    () => fetchResults(filteredAnswers),
  );
  const results = response?.data;

  useEffect(() => {
    setSortedResults(
      orderBy(results, ['compatibility', 'name'], ['desc', 'asc']),
    );
  }, [results]);

  if (!comesFromAFinishedPresidentialUserTrip()) {
    Router.push('/');
    return null;
  }

  if (error) {
    // Todo: Add Error component
    return <p>Error: {error}</p>;
  }
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (sortedResults && sortedResults.length) {
    return (
      <MainLayout>
        <Styled.Row>
          <Styled.GoBackButton to="/" text="Regresa" />
        </Styled.Row>
        <Styled.Title>Resultados</Styled.Title>
        <Styled.Results>
          <Styled.Paragraph align="left">
            Ordenar resultados por compatibilidad en
          </Styled.Paragraph>
          <Styled.Select
            onChange={(event) =>
              onByTopicSelectChange({
                topic: event.target.value,
                results,
                setSortedResults,
                setSelectedTopic,
              })
            }>
            <option value="">Todos los temas que seleccioné</option>
            {userSelectedTopics.map((topic) => {
              return (
                <option key={topic} value={topic}>
                  {capitalize(translationMap[topic])}
                </option>
              );
            })}
          </Styled.Select>
          <Styled.HorizontalRule />
          <Styled.ThinkLikeYou>
            Plan de gobierno más compatible en:
            <Styled.ThinkLikeYouTopics>
              {topicsToTextList(
                translateTopics(
                  selectedTopic ? [selectedTopic] : userSelectedTopics,
                  translationMap,
                ),
              )}
              .
            </Styled.ThinkLikeYouTopics>
          </Styled.ThinkLikeYou>
          {sortedResults.map(
            (
              {
                org_politica_nombre: partyName,
                name: partyAlias,
                compatibility,
                compatibility_per_topic,
                president: { hoja_vida_id },
              },
              index,
            ) => (
              <Styled.CompatibilityPartyCard
                key={`PartyCard-${index}`}
                partyName={partyName}
                partyAlias={partyAlias}
                compatibility={compatibilityToPercentage(
                  !selectedTopic
                    ? compatibility
                    : compatibility_per_topic[selectedTopic],
                )}
                profileImageId={hoja_vida_id}
                onClick={() =>
                  Router.push(`/presidential-list/${toggleSlug(partyName)}/`)
                }
              />
            ),
          )}
        </Styled.Results>
        <DisclaimerFooter />
      </MainLayout>
    );
  }
  return null;
}
