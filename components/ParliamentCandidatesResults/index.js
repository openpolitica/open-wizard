import { useState } from 'react';
import { useRouter } from 'next/router';
import ls from 'local-storage';
import * as Styled from './styles';
import toggleSlug from 'components/PartyCard/toggleSlug';
import startCasePeruvianRegions from 'components/Steps/PartyResults/startCasePeruvianRegions';
import GoBackButton from 'components/GoBackButton';

import FilterParliamentModal from 'components/FilterParliamentModal';
import comesFromAFinishedUserTrip from 'components/ParliamentResults/comesFromAFinishedUserTrip';

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
