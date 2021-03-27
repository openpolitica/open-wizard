import * as Styled from './styles';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import Loading from 'components/Loading';
import GoBackButton from 'components/GoBackButton';
import MainLayout from 'components/layouts/MainLayout';
import CandidateCard from 'components/CandidateCard';
import toggleSlug from 'components/PartyCard/toggleSlug';

const LoadingScreen = () => {
  return (
    <MainLayout>
      <Loading />
    </MainLayout>
  );
};

export default function presidentList(props) {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const { data } = useSWR(`/api/parties/presidential_lists`, () =>
    fetch(`${process.env.api.partiesUrl}/presidential_lists`).then((data) =>
      data.json(),
    ),
  );

  if (!data) {
    return <LoadingScreen />;
  }
  const presidentsList = data?.data;

  return (
    <MainLayout>
      <Styled.Row>
        <GoBackButton text="Regresar" to="/" />
      </Styled.Row>
      <Styled.Title>Lista de candidatos a la presidencia</Styled.Title>
      <Styled.ListUL>
        {presidentsList.map((president) => (
          <Styled.ListItem key={president.org_politica_id}>
            <CandidateCard
              href={`/presidential-list/${toggleSlug(
                president.org_politica_nombre,
              )}`}
              candidateParty={president.org_politica_nombre}
              candidateFullname={`${president.id_nombres} ${president.id_apellido_paterno}`}
              profileImageId={president.hoja_vida_id}
              systemId={president.hoja_vida_id}
            />
          </Styled.ListItem>
        ))}
      </Styled.ListUL>
    </MainLayout>
  );
}
