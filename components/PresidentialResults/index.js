import Router from 'next/router';
import useSWR from 'swr';
import { useTopics } from 'hooks/useTopics';
import * as Styled from './styles';
import MainLayout from 'components/layouts/MainLayout';
import Loading from 'components/Loading';

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
  const { userAnswers } = useTopics();
  const { data: response, error, isLoading } = useSWR(
    '/api/policies/results',
    () => fetchResults(userAnswers),
  );
  const results = response?.data;

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
          <Styled.ThinkLikeYou>Piensa más como tú</Styled.ThinkLikeYou>
          <Styled.CompatibilityPartyCard
            partyName={results[0].name}
            compatibility={compatibilityToPercentage(results[0].compatibility)}
            profileImageId={results[0].president.hoja_vida_id}
            onClick={() =>
              Router.push(`/presidential-list/${results[0].name}/`)
            }
          />
          <Styled.OtherResults>Otros resultados</Styled.OtherResults>
          {results
            .slice(1)
            .map(
              (
                { name: partyName, compatibility, president: { hoja_vida_id } },
                index,
              ) => (
                <Styled.CompatibilityPartyCard
                  key={`PartyCard-${index}`}
                  partyName={partyName}
                  compatibility={compatibilityToPercentage(compatibility)}
                  profileImageId={hoja_vida_id}
                  onClick={() =>
                    Router.push(`/presidential-list/${partyName}/`)
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
            El equipo de Open Política analizó los planes de gobierno de los{' '}
            <strong>
              10 partidos con mayor intención de voto presidencial al 10 de
              marzo de 2021.
            </strong>
          </Styled.Text1>
          <Styled.Text2>
            Si deseas leer el detalle del análisis, puedes descargarlo desde el
            siguiente enlace:
          </Styled.Text2>
          <Styled.DownloadText href="#">
            <Styled.DownloadIcon />
            Descargar reporte en PDF
          </Styled.DownloadText>
        </Styled.Disclaimer>
      </MainLayout>
    );
  }
  return null;
}
