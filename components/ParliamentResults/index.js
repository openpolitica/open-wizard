import { useEffect, useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import groupBy from 'lodash.groupby';
import * as Styled from './styles';
import { PartyParliamentCard } from 'components/PartyCard';
import Loading from 'components/Loading';
import FilterParliamentModal from 'components/FilterParliamentModal';
import GoBackButton from 'components/GoBackButton';
import MainLayout from 'components/layouts/MainLayout';
import comesFromAFinishedUserTrip from './comesFromAFinishedUserTrip';
import { applyFilters } from 'components/Steps/PartyResults/filters';

const mapApiTerms = (options) => ({
  sentencias: options.sentencias,
  role: 'PARLAMENTO ANDINO',
});

const LoadingScreen = () => {
  return (
    <MainLayout>
      <Loading />
    </MainLayout>
  );
};

const groupCandidatesByPartyNameAndLS = (candidates, keyName) => {
  const groupedCandidates = groupBy(candidates, 'org_politica_nombre');
  if (keyName) {
    ls('op.parliament', {
      ...ls('op.parliament'),
      [keyName]: groupedCandidates,
    });
  }
  return groupedCandidates;
};

const showPartyCards = (candidatesByPartyName) => {
  return Object.keys(candidatesByPartyName).map((partyName) => (
    <PartyParliamentCard
      key={partyName}
      partyName={partyName}
      partyAlias={candidatesByPartyName[partyName][0].org_politica_alias}
      numberOfCandidates={candidatesByPartyName[partyName].length}
      candidates={candidatesByPartyName[partyName]}
    />
  ));
};

export default function PartyResults(props) {
  // initializa candidates state, populate with filteredCandidates if exists
  const [candidates, setCandidates] = useState({});
  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const [filters, setFilters] = useState(ls('op.parliament')?.filters || []);

  if (!comesFromAFinishedUserTrip()) {
    Router.push('/');
    return null;
  }

  const fetchStoreCandidates = async () => {
    // vacancia path step 1: refreshes from API
    const response = await fetch(
      `${process.env.api.candidatesUrl}?${apiTerms}`,
    );
    const data = await response.json();

    //// apply filters to candidates if filters exist
    const fetchedCandidates = filters.length
      ? applyFilters(data?.data.candidates)(filters)
      : data?.data.candidates;

    // vacancia path step 2: update local candidates state with filters when applicable
    setCandidates(groupCandidatesByPartyNameAndLS(fetchedCandidates));

    // vacancia path step 3: refresh local storage information
    //// store new rawCandidates (never filtered!)
    ls('op.parliament', {
      ...ls('op.parliament'),
      rawCandidates: data?.data.candidates,
    });
    //// group and store new filteredcandidates
    groupCandidatesByPartyNameAndLS(fetchedCandidates, 'filteredCandidates');
  };

  const apiTerms = qs.stringify(mapApiTerms(ls('op.parliament')));

  // Data refresh hooks
  useEffect(() => {
    // vacancia path: refresh "candidates" state!
    fetchStoreCandidates();
  }, []);

  useEffect(() => {
    // internal path, whenever filters change:
    //// update "candidates" state based on filters!
    //// FilterParliamentModal takes care of updating local storage
    setCandidates(ls('op.parliament').filteredCandidates);
  }, [filters]);

  if (!candidates) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <FilterParliamentModal
        isOpen={isFilterModalOpen}
        filters={filters}
        setFilters={setFilters}
        onCloseButtonClick={() => setFilterModalState(false)}
      />

      <Styled.Step>
        <Styled.Row>
          <GoBackButton to={'/parliament-steps/1'} text="Regresa" />
        </Styled.Row>
        <Styled.Title>Resultados</Styled.Title>
        <Styled.FilterButton
          type="transparent"
          onClick={() => setFilterModalState(true)}
        />
        <Styled.Chip type="good">
          Puedes elegir hasta 2 parlamentarios andinos del mismo partido.
        </Styled.Chip>
        {Object.keys(candidates).length ? (
          <Styled.Results>{showPartyCards(candidates)}</Styled.Results>
        ) : (
          <Styled.NoCandidatesChip type="bad">
            <span>Creo que estás pidiendo mucho.</span>
          </Styled.NoCandidatesChip>
        )}
      </Styled.Step>
    </MainLayout>
  );
}
