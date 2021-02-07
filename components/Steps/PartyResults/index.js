import { useState } from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import groupBy from 'lodash.groupby';
import * as Styled from './styles';
import PartyCard from 'components/PartyCard';
import Loading from 'components/Loading';
import FilterModal from 'components/FilterModal';
import {
  applyFilter,
  applyFilters,
  byGenre,
  onlyMale,
  onlyFemale,
  hasJNEIncome,
  hasPublicServiceExperience,
  hasPrivateWorkExperience,
  byStudies,
  upToPrimary,
  upToSecondary,
  upToHighSchool,
  upToPostgraduate,
  doesntHaveSanctionsWithSunat,
  doesntHaveSanctionsWithServir,
  doesntHaveSanctionsWithDriving,
} from './filters';
import GoBackButton from 'components/GoBackButton';
import startCasePeruvianRegions from './startCasePeruvianRegions';
import simplePluralize from './simplePluralize';

const mapApiTerms = (options) => ({
  vacancia: options.impeachment,
  sentencias: options.withSentence,
  region: options.location,
  role: 'CONGRESISTA',
  limit: 0,
});

const LoadingScreen = () => {
  return (
    <Styled.Container>
      <Styled.Header />
      <Loading />
    </Styled.Container>
  );
};

const groupCandidatesByPartyNameAndLS = (candidates, keyName) => {
  const groupedCandidates = groupBy(candidates, 'org_politica_nombre');
  ls('op.wizard', { ...ls('op.wizard'), [keyName]: groupedCandidates });
  return groupedCandidates;
};

const showPartyCards = () => {
  const candidatesByPartyName = ls('op.wizard').filteredCandidates;
  console.log(candidatesByPartyName);
  return Object.keys(candidatesByPartyName).map((partyName) => (
    <PartyCard
      key={partyName}
      partyName={partyName}
      partyAlias={candidatesByPartyName[partyName][0].org_politica_alias}
      numberOfCandidates={candidatesByPartyName[partyName].length}
      candidates={candidatesByPartyName[partyName]}
    />
  ));
};

const fetchCandidates = () => {
  const apiTerms = qs.stringify(mapApiTerms(ls('op.wizard')));
  const { data, error } = useSWR('/api/candidates', () =>
    fetch(`${process.env.api.candidatesUrl}?${apiTerms}`).then((data) =>
      data.json(),
    ),
  );
  return data;
};

const fetchSeats = (location) => {
  const { data, error } = useSWR('/api/locations/seats', () =>
    fetch(`${process.env.api.locationsUrl}/${location}/seats`).then((data) =>
      data.json(),
    ),
  );
  return data;
};

export default function PartyResults(props) {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const data = fetchCandidates();
  ls('op.wizard', { ...ls('op.wizard'), rawCandidates: data?.data.candidates });
  const location = ls('op.wizard').location;
  const seats = fetchSeats(location);
  const [filters, setFilters] = useState(ls('op.wizard')?.filters || []);

  if (!data || !seats) {
    return <LoadingScreen />;
  }
  groupCandidatesByPartyNameAndLS(ls('op.wizard').rawCandidates, 'candidates');
  if (!ls('op.wizard').filteredCandidates) {
    groupCandidatesByPartyNameAndLS(
      ls('op.wizard').rawCandidates,
      'filteredCandidates',
    );
  }

  return (
    <Styled.Container>
      <FilterModal
        isOpen={isFilterModalOpen}
        applyFilter={applyFilter}
        onlyFemale={onlyFemale}
        onlyMale={onlyMale}
        hasPublicServiceExperience={hasPublicServiceExperience}
        hasPrivateWorkExperience={hasPrivateWorkExperience}
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
          <GoBackButton to={'/steps/3'} text="Regresa" />
          <Styled.FilterButton onClick={() => setFilterModalState(true)} />
        </Styled.Row>
        <Styled.Title>Explora tus opciones</Styled.Title>
        <Styled.Chip type={'good'}>
          <strong>{startCasePeruvianRegions(location)}</strong> tendrá{' '}
          <strong>{simplePluralize(seats?.data.seats, 'sitio')}</strong> en el
          congreso.
        </Styled.Chip>
        <Styled.Results>{showPartyCards()}</Styled.Results>
      </Styled.Step>
    </Styled.Container>
  );
}
