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

const mapApiTerms = (options) => ({
  vacancia: options.impeachment,
  sentencias: options.withSentence,
  region: options.location,
  role: 'CONGRESISTA DE LA REPÚBLICA',
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

const groupCandidatesByPartyName = (candidates) => {
  const candidatesByPartyName = groupBy(candidates, 'org_politica_nombre');

  return Object.keys(candidatesByPartyName).map((partyName) => (
    <PartyCard
      key={partyName}
      partyName={partyName}
      partyAlias={candidatesByPartyName[partyName][0].org_politica_alias}
      numberOfCandidates={candidatesByPartyName[partyName].length}
    />
  ));
};

export default function PartyResults(props) {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const location = ls('op.wizard').location;
  const apiTerms = qs.stringify(mapApiTerms(ls('op.wizard')));
  const { data, error } = useSWR('/api/candidates', () =>
    fetch(`${process.env.api.candidatesUrl}${apiTerms}`).then((data) =>
      data.json(),
    ),
  );
  const [filters, setFilters] = useState([]);

  if (!data) {
    return <LoadingScreen />;
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
        <Styled.Chip>Utiliza los filtros para refinar tu búsqueda</Styled.Chip>
        <Styled.Results>
          {groupCandidatesByPartyName(
            filters.length
              ? applyFilters(data?.data.candidates)(filters)
              : data?.data.candidates,
          )}
        </Styled.Results>
      </Styled.Step>
    </Styled.Container>
  );
}
