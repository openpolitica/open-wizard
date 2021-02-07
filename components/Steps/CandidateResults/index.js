import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import * as Styled from './styles';
import toggleSlug from 'components/PartyCard/toggleSlug';
import startCasePeruvianRegions from 'components/Steps/PartyResults/startCasePeruvianRegions';
import Loading from 'components/Loading';
import GoBackButton from 'components/GoBackButton';
import FilterModal from 'components/FilterModal';
import {
  applyFilter,
  applyFilters,
  byGenre,
  onlyMale,
  onlyFemale,
  hasJNEIncome,
  hasPublicServiceExperience,
  byStudies,
  upToPrimary,
  upToSecondary,
  upToHighSchool,
  upToPostgraduate,
  doesntHaveSanctionsWithSunat,
  doesntHaveSanctionsWithServir,
  doesntHaveSanctionsWithDriving,
} from 'components/Steps/PartyResults/filters';

const mapApiTerms = (options) => ({
  vacancia: options.impeachment,
  sentencias: options.withSentence,
  region: options.location,
  role: 'CONGRESISTA',
  limit: 10,
});

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
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }
  if (!router.query.partyName) {
    router.push('/');
  }

  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const [filters, setFilters] = useState(ls('op.wizard').filters);
  const candidates = ls('op.wizard').filteredCandidates[
    toggleSlug(router.query.partyName)
  ];

  return (
    <Styled.Container>
      <FilterModal
        isOpen={isFilterModalOpen}
        applyFilter={applyFilter}
        onlyFemale={onlyFemale}
        onlyMale={onlyMale}
        hasPublicServiceExperience={hasPublicServiceExperience}
        hasJNEIncome={hasJNEIncome}
        upToPrimary={upToPrimary}
        upToSecondary={upToSecondary}
        upToHighSchool={upToHighSchool}
        upToPostgraduate={upToPostgraduate}
        doesntHaveSanctionsWithSunat={doesntHaveSanctionsWithSunat}
        doesntHaveSanctionsWithServir={doesntHaveSanctionsWithServir}
        doesntHaveSanctionsWithDriving={doesntHaveSanctionsWithDriving}
        filters={filters}
        setFilters={setFilters}
        onCloseButtonClick={() => setFilterModalState(false)}
      />
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton to={'/results/grouped-by-party'} text="Regresa" />
          <Styled.FilterButton onClick={() => setFilterModalState(true)} />
        </Styled.Row>
        <Styled.Title align="center">
          Tienes <Styled.Emphasis>{candidates.length}</Styled.Emphasis> posibles
          candidatos de{' '}
          <Styled.Emphasis>
            {startCasePeruvianRegions(candidates[0].org_politica_nombre)}
          </Styled.Emphasis>
        </Styled.Title>
        <Styled.Candidates>
          {candidates.map((candidate, index) => (
            <Styled.CandidateCard
              key={`Candidate-${index}`}
              candidateParty={candidate.org_politica_nombre}
              candidateNumber={candidate.posicion}
              candidateFullname={`${candidate.id_nombres} ${candidate.id_apellido_paterno}`}
              profileImageId={candidate.hoja_vida_id}
            />
          ))}
        </Styled.Candidates>
      </Styled.Step>
    </Styled.Container>
  );
}
