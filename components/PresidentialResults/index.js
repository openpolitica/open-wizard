import Router from 'next/router';
import useSWR from 'swr';
import { useTopics } from 'hooks/useTopics';
import * as Styled from './styles';
import MainLayout from 'components/layouts/MainLayout';
import Loading from 'components/Loading';
import toggleSlug from 'components/PartyCard/toggleSlug';
import comesFromAFinishedPresidentialUserTrip from 'components/PresidentialList/comesFromAFinishedPresidentialUserTrip';
import { translationMap } from 'components/TopicCheckbox';

const LoadingScreen = () => {
  return (
    <MainLayout>
      <Loading />
    </MainLayout>
  );
};

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

export default function PresidentialResults() {
  const { userAnswers, userSelectedTopics } = useTopics();
  const { data: response, error, isLoading } = useSWR(
    '/api/policies/results',
    () => fetchResults(userAnswers.filter((answer) => answer.answerId)),
  );
  const results = response?.data;
  const topResults = results?.filter(
    (element) => element.compatibility === results[0].compatibility,
  );
  const otherResults = results?.filter(
    (element) => element.compatibility !== results[0].compatibility,
  );
  const isSingleTopic = userSelectedTopics && userSelectedTopics.length === 1;

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
  if (results && results.length) {
    return (
      <MainLayout>
        <Styled.Row>
          <Styled.GoBackButton to="/" text="Regresa" />
        </Styled.Row>
        <Styled.Title>Resultados</Styled.Title>
        <Styled.Results>
          <Styled.ThinkLikeYou>
            Piensa más como tú {isSingleTopic ? 'en ' : ''}
            <Styled.ThinkLikeYouSingleTopic as="span">
              {isSingleTopic ? `${translationMap[userSelectedTopics[0]]}` : ''}
            </Styled.ThinkLikeYouSingleTopic>
          </Styled.ThinkLikeYou>
          {topResults.map(
            (
              {
                org_politica_nombre: partyName,
                name: partyAlias,
                compatibility,
                president: { hoja_vida_id },
              },
              index,
            ) => (
              <Styled.CompatibilityPartyCard
                key={`PartyCard-${index}`}
                partyName={partyName}
                partyAlias={partyAlias}
                compatibility={compatibilityToPercentage(compatibility)}
                profileImageId={hoja_vida_id}
                onClick={() =>
                  Router.push(`/presidential-list/${toggleSlug(partyName)}/`)
                }
              />
            ),
          )}
          <Styled.OtherResults>Otros resultados</Styled.OtherResults>
          {otherResults.map(
            (
              {
                org_politica_nombre: partyName,
                name: partyAlias,
                compatibility,
                president: { hoja_vida_id },
              },
              index,
            ) => (
              <Styled.CompatibilityPartyCard
                key={`PartyCard-${index}`}
                partyName={partyName}
                partyAlias={partyAlias}
                compatibility={compatibilityToPercentage(compatibility)}
                profileImageId={hoja_vida_id}
                onClick={() =>
                  Router.push(`/presidential-list/${toggleSlug(partyName)}/`)
                }
              />
            ),
          )}
        </Styled.Results>
        <Styled.HorizontalRule />
        <Styled.Disclaimer>
          <Styled.Tagline>¿Cómo obtuve estos resultados?</Styled.Tagline>
          <Styled.CallToAction>
            Revisa el análisis que hicimos a los planes de gobierno
          </Styled.CallToAction>
          <Styled.Text1>
            El equipo de{' '}
            <Styled.Link
              href="//openpolitica.com"
              target="_blank"
              rel="noopener noreferrer">
              Open Política
            </Styled.Link>{' '}
            analizó los planes de gobierno de los{' '}
            <strong>
              10 partidos con mayor intención de voto presidencial al 10 de
              marzo de 2021.
            </strong>
          </Styled.Text1>
          <Styled.Text2>
            Si deseas leer el detalle del análisis, puedes descargarlo desde el
            siguiente enlace:
          </Styled.Text2>
          <Styled.DownloadLink
            href="//drive.google.com/drive/folders/1I0SvScSG72M1fxyAuqXPkZK4JLxl1_kQ?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <Styled.DownloadIcon />
            Descargar reporte en PDF
          </Styled.DownloadLink>
        </Styled.Disclaimer>
      </MainLayout>
    );
  }
  return null;
}
