import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import * as Styled from './styles';
import toggleSlug from 'components/PartyCard/toggleSlug';
import startCasePeruvianRegions from 'components/Steps/PartyResults/startCasePeruvianRegions';
import Loading from 'components/Loading';
import GoBackButton from 'components/GoBackButton';

import FilterParliamentModal from 'components/FilterParliamentModal';
import comesFromAFinishedUserTrip from 'components/ParliamentResults/comesFromAFinishedUserTrip';

const LoadingScreen = () => {
  return (
    <Styled.Container>
      <Styled.Header />
      <Loading />
    </Styled.Container>
  );
};

export default function Step4(props) {
  const router = useRouter();

  if (!router.query.partyName || !comesFromAFinishedUserTrip()) {
    router.push('/');
    return null;
  }

  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const [filters, setFilters] = useState(ls('op.parliament').filters);
  const candidates = ls('op.parliament').filteredCandidates[
    toggleSlug(router.query.partyName)
  ];

  const { isLoading, data } = useSWR(
    candidates
      ? `/api/parties/dirtylists?party=${candidates[0].org_politica_nombre}`
      : null,
    () =>
      fetch(
        `${process.env.api.partiesUrl}/dirtylists?party=${candidates[0].org_politica_nombre}`,
      ).then((data) => data.json()),
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  const listIssues = data?.data?.lists[0];
  const badIssues = listIssues
    ? listIssues.sentencias_civiles +
        listIssues.sentencias_penales +
        listIssues.sancion_servir >
      0
    : null;

  return (
    <Styled.Container>
      <FilterParliamentModal
        isOpen={isFilterModalOpen}
        filters={filters}
        setFilters={setFilters}
        onCloseButtonClick={() => setFilterModalState(false)}
      />
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton
            to="/parliament-results/grouped-by-party"
            text="Regresa"
          />
        </Styled.Row>
        <Styled.Title align="center">
          Tienes{' '}
          <Styled.Emphasis>
            {candidates ? candidates.length : 0}
          </Styled.Emphasis>{' '}
          posibles candidatos {candidates ? 'de' : ''}{' '}
          <Styled.Emphasis>
            {startCasePeruvianRegions(
              candidates ? candidates[0].org_politica_nombre : '',
            )}
          </Styled.Emphasis>
        </Styled.Title>
        <Styled.FilterButton
          type="transparent"
          onClick={() => setFilterModalState(true)}
        />
        <Styled.ChipCard type="good">
          Recuerda que tu voto por este partido beneficia a los primeros de su
          lista al congreso.
        </Styled.ChipCard>
        {candidates && badIssues ? (
          <Styled.ChipCard type="bad">
            Alguno de los primeros de esta lista tiene{' '}
            <strong>sentencias y/o sanciones en SERVIR.</strong>
          </Styled.ChipCard>
        ) : null}
        <Styled.Candidates>
          {candidates ? (
            candidates.map((candidate, index) => (
              <Styled.CandidateCard
                key={`Candidate-${index}`}
                candidateParty={candidate.org_politica_nombre}
                candidateNumber={candidate.posicion}
                candidateFullname={`${candidate.id_nombres} ${candidate.id_apellido_paterno}`}
                profileImageId={candidate.hoja_vida_id}
                systemId={candidate.hoja_vida_id}
              />
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </Styled.Candidates>
      </Styled.Step>
    </Styled.Container>
  );
}
