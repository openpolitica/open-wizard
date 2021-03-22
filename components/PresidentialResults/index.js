// import { useTopics } from 'hooks/useTopics';
import * as Styled from './styles';
import MainLayout from 'components/layouts/MainLayout';

// import Loading from 'components/Loading';

// const LoadingScreen = () => {
//   return (
//     <MainLayout>
//       <Loading />
//     </MainLayout>
//   );
// };

export default function PresidentialResults() {
  // const { userAnswers } = useTopics();

  return (
    <MainLayout>
      <Styled.Row>
        <Styled.GoBackButton to="/" text="Regresa" />
      </Styled.Row>
      <Styled.Title>Resultados</Styled.Title>
      <Styled.Results>
        <Styled.ThinkLikeYou>Piensa más como tú</Styled.ThinkLikeYou>
        <Styled.CompatibilityPartyCard
          partyName="Accion Popular"
          compatibility={69}
        />
        <Styled.OtherResults>Otros resultados</Styled.OtherResults>
        <Styled.CompatibilityPartyCard />
        <Styled.CompatibilityPartyCard />
        <Styled.CompatibilityPartyCard />
        <Styled.CompatibilityPartyCard />
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
            10 partidos con mayor intención de voto presidencial al 10 de marzo
            de 2021.
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
