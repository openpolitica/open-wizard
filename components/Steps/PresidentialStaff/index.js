import * as Styled from './styles';
// import useSWR from 'swr';
// import fetch from 'isomorphic-fetch';
import { useRouter } from 'next/router';
import ls from 'local-storage';
import startCasePeruvianRegions from 'components/Steps/PartyResults/startCasePeruvianRegions';
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

export default function PresidentialStaff(props) {
  const router = useRouter();
  const { fromPath } = router.query;

  // const partyId = props.partyId
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  // const { data } = useSWR(`/api/parties/partyId=${partyId}`, () =>
  //   fetch(`/api/parties/partyId=${partyId}`).then((data) => data.json()),
  // );

  // TODO: Call from API
  const data = {
    president: {
      hoja_vida_id: 134382,
      id_nombres: 'DANIEL ENRIQUE',
      id_apellido_paterno: 'SALAVERRY',
      id_apellido_materno: 'VILLA',
      id_sexo: 'M',
      enlace_foto:
        'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/134382.jpg',
      cargo_id: 1,
      org_politica_id: 14,
      org_politica_nombre: 'ACCION POPULAR',
    },
    firstVP: {
      hoja_vida_id: 134372,
      id_nombres: 'MATILDE',
      id_apellido_paterno: 'FERNANDEZ',
      id_apellido_materno: 'FLOREZ',
      id_sexo: 'F',
      enlace_foto:
        'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/134372.jpg',
      cargo_id: 2,
      org_politica_id: 14,
      org_politica_nombre: 'ACCION POPULAR',
    },
    secondVP: {
      hoja_vida_id: 134453,
      id_nombres: 'JORGE LUIS',
      id_apellido_paterno: 'PEREZ',
      id_apellido_materno: 'FLORES',
      id_sexo: 'M',
      enlace_foto:
        'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/134453.jpg',
      cargo_id: 3,
      org_politica_id: 14,
      org_politica_nombre: 'ACCION POPULAR',
    },
  };

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          {/* TODO: Go Back URL */}
          <GoBackButton
            to={fromPath || '/'}
            text={generateGoBackText(fromPath)}
          />
        </Styled.Row>
        <Styled.Title>Plancha Presidencial de</Styled.Title>
        <Styled.EmphasizedTitle>
          {startCasePeruvianRegions(data.president.org_politica_nombre)}
        </Styled.EmphasizedTitle>
        <Styled.CandidateSingle>
          <Styled.Subtitle>
            {data.president.id_sexo === 'F' ? 'Presidenta' : 'Presidente'}
          </Styled.Subtitle>
          <Styled.CandidateCard
            candidateParty={data.president.org_politica_nombre}
            candidateFullname={`${data.president.id_nombres} ${data.president.id_apellido_paterno}`}
            profileImageId={data.president.hoja_vida_id}
            systemId={data.president.hoja_vida_id}
          />
        </Styled.CandidateSingle>
        <Styled.CandidateSingle>
          <Styled.Subtitle>
            {data.firstVP.id_sexo === 'F'
              ? 'Primera Vicepresidenta'
              : 'Primer Vicepresidente'}
          </Styled.Subtitle>
          <Styled.CandidateCard
            candidateParty={data.firstVP.org_politica_nombre}
            candidateFullname={`${data.firstVP.id_nombres} ${data.firstVP.id_apellido_paterno}`}
            profileImageId={data.firstVP.hoja_vida_id}
            systemId={data.firstVP.hoja_vida_id}
          />
        </Styled.CandidateSingle>
        <Styled.CandidateSingle>
          <Styled.Subtitle>
            {data.secondVP.id_sexo === 'F'
              ? 'Segunda Vicepresidenta'
              : 'Segundo Vicepresidente'}
          </Styled.Subtitle>
          <Styled.CandidateCard
            candidateParty={data.secondVP.org_politica_nombre}
            candidateFullname={`${data.secondVP.id_nombres} ${data.secondVP.id_apellido_paterno}`}
            profileImageId={data.secondVP.hoja_vida_id}
            systemId={data.secondVP.hoja_vida_id}
          />
        </Styled.CandidateSingle>
      </Styled.Step>
    </Styled.Container>
  );
}
