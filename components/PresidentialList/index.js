import * as Styled from './styles';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import toggleSlug from 'components/PartyCard/toggleSlug';
import Router, { useRouter } from 'next/router';
import Loading from 'components/Loading';
import GoBackButton from 'components/GoBackButton';
import comesFromAFinishedPresidentialUserTrip from './comesFromAFinishedPresidentialUserTrip';
import ExternalLinkIcon from 'public/images/icons/external-link.svg';

const LoadingScreen = () => {
  return (
    <Styled.Container>
      <Styled.Header />
      <Loading />
    </Styled.Container>
  );
};

const goBackToPartyResults = (event) => {
  if (comesFromAFinishedPresidentialUserTrip()) {
    Router.push('/presidential-results/grouped-by-compatibility');
    return;
  }
  Router.push('/');
};

const governancePlanMapByPartyId = {
  4: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16511.pdf',
  1257: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16531.pdf',
  2173: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16535.pdf',
  2191: 'https://drive.google.com/file/d/1t-u3sSqjV4il_sxw_5P6CPAzakFhXfcv/view',
  2160: 'https://drive.google.com/file/d/1X7mJITVhVluvQ0PemY68PIZVP4zagpnt/view',
  2646: '',
  1366: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16490.pdf',
  1264: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16479.pdf',
  14: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16494.pdf',
  2840: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16521.pdf',
  179: 'https://drive.google.com/file/d/1odWKpBC7OTNllBXzNn80JNp--9RgFk_J/view',
  2235: '',
  2218: 'https://drive.google.com/file/d/1F-yD4uPT_C8zbgjlsRruObd4otgRYMh0/view',
  15: 'https://drive.google.com/file/d/1ytbf2OUCWe8PK6rOqOR9lgrKuYIr4vsq/view',
  55: 'https://drive.google.com/file/d/1HYtZSPjoaJ0NuXvv42ElGYErmFeoclLy/view',
  2731: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16536.pdf',
  5: 'https://drive.google.com/file/d/1ZWK1dXKEORw6BxzvyKyiMu7507mHLePP/view',
  22: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16482.pdf',
  47: 'https://drive.google.com/file/d/1Cph8rUOWUN4-f6TIuaik1Quwfd0xOx7i/view',
  21: 'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16517.pdf',
};

export default function presidentList(props) {
  const router = useRouter();
  const { partyName } = router.query;

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
            text={
              comesFromAFinishedPresidentialUserTrip()
                ? 'Regresa a resultados'
                : 'Inicia tu viaje'
            }
            onClick={goBackToPartyResults}
          />
        </Styled.Row>
        <Styled.Title>Plancha Presidencial de</Styled.Title>
        <Styled.EmphasizedTitle>
          {presidentList.president.org_politica_alias}
        </Styled.EmphasizedTitle>
        <Styled.ExternalLink
          href={
            governancePlanMapByPartyId[presidentList.president.org_politica_id]
          }
          target="_blank"
          rel="noopener noreferrer">
          <ExternalLinkIcon />
          <Styled.ExternalLinkText>
            Ir al plan de gobierno
          </Styled.ExternalLinkText>
        </Styled.ExternalLink>
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
