import * as Styled from './styles';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import toggleSlug from 'components/PartyCard/toggleSlug';
import { useRouter } from 'next/router';
import ls from 'local-storage';
import Loading from 'components/Loading';
import GoBackButton from 'components/GoBackButton';

const LoadingScreen = () => {
  return (
    <Styled.Container>
      <Styled.Header />
      <Loading />
    </Styled.Container>
  );
};

function generateGoBackText(path) {
  if (!ls('op.wizard')) {
    return 'Inicia tu viaje';
  }
  return 'Regresa a resultados';
}

export default function presidentList(props) {
  const router = useRouter();
  const { fromPath, partyName } = router.query;

  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const { data } = useSWR(`/api/parties/presidential_lists/${partyName}`, () =>
    fetch(
      `${process.env.api.partiesUrl}/presidential_lists/${toggleSlug(
        partyName,
      )}`,
    ).then((data) => data.json()),
  );

  if (!data) {
    return <LoadingScreen />;
  }
  const presidentList = data?.data;

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton
            to={fromPath || '/'}
            text={generateGoBackText(fromPath)}
          />
        </Styled.Row>
        <Styled.Title>Plancha Presidencial de</Styled.Title>
        <Styled.EmphasizedTitle>
          {presidentList.president.org_politica_alias}
        </Styled.EmphasizedTitle>
        <Styled.CandidateSingle>
          <Styled.Subtitle>
            {presidentList.president.id_sexo === 'F'
              ? 'Presidenta'
              : 'Presidente'}
          </Styled.Subtitle>
          <Styled.CandidateCard
            candidateParty={presidentList.president.org_politica_nombre}
            candidateFullname={`${presidentList.president.id_nombres} ${presidentList.president.id_apellido_paterno}`}
            profileImageId={presidentList.president.hoja_vida_id}
            systemId={presidentList.president.hoja_vida_id}
          />
        </Styled.CandidateSingle>
        {presidentList.firstVP ? (
          <Styled.CandidateSingle>
            <Styled.Subtitle>
              {presidentList.firstVP.id_sexo === 'F'
                ? 'Primera Vicepresidenta'
                : 'Primer Vicepresidente'}
            </Styled.Subtitle>
            <Styled.CandidateCard
              candidateParty={presidentList.firstVP.org_politica_nombre}
              candidateFullname={`${presidentList.firstVP.id_nombres} ${presidentList.firstVP.id_apellido_paterno}`}
              profileImageId={presidentList.firstVP.hoja_vida_id}
              systemId={presidentList.firstVP.hoja_vida_id}
            />
          </Styled.CandidateSingle>
        ) : null}
        {presidentList.secondVP ? (
          <Styled.CandidateSingle>
            <Styled.Subtitle>
              {presidentList.secondVP.id_sexo === 'F'
                ? 'Segunda Vicepresidenta'
                : 'Segundo Vicepresidente'}
            </Styled.Subtitle>
            <Styled.CandidateCard
              candidateParty={presidentList.secondVP.org_politica_nombre}
              candidateFullname={`${presidentList.secondVP.id_nombres} ${presidentList.secondVP.id_apellido_paterno}`}
              profileImageId={presidentList.secondVP.hoja_vida_id}
              systemId={presidentList.secondVP.hoja_vida_id}
            />
          </Styled.CandidateSingle>
        ) : null}
      </Styled.Step>
    </Styled.Container>
  );
}
