import { useEffect, useState, useContext } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import groupBy from 'lodash.groupby';
import { FavoritesContext } from 'hooks/useFavorites';
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
import FavoriteButton from 'components/FavoriteButton';
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
  if (keyName) {
    ls('op.wizard', { ...ls('op.wizard'), [keyName]: groupedCandidates });
  }
  return groupedCandidates;
};

const showPartyCards = (candidatesByPartyName) => {
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

const fetchSeats = (location) => {
  const { data, error } = useSWR('/api/locations/seats', () =>
    fetch(`${process.env.api.locationsUrl}/${location}/seats`).then((data) =>
      data.json(),
    ),
  );
  return data;
};

export default function PartyResults(props) {
  // initializa candidates state, populate with filteredCandidates if exists
  const [candidates, setCandidates] = useState({});
  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const [filters, setFilters] = useState(ls('op.wizard')?.filters || []);
  const { favorites } = useContext(FavoritesContext);

  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const fetchStoreCandidates = async () => {
    // vacancia path step 1: refreshes from API
    const response = await fetch(
      `${process.env.api.candidatesUrl}?${apiTerms}`,
    );
    const data = await response.json();

    //// apply filters to candidates if filters exist
    const fetchedCandidates = (await filters.length)
      ? applyFilters(data?.data.candidates)(filters)
      : data?.data.candidates;

    // vacancia path step 2: update local candidates state with filters when applicable
    setCandidates(groupCandidatesByPartyNameAndLS(fetchedCandidates));

    // vacancia path step 3: refresh local storage information
    //// store new rawCandidates (never filtered!)
    ls('op.wizard', {
      ...ls('op.wizard'),
      rawCandidates: data?.data.candidates,
    });
    //// group and store new filteredcandidates
    groupCandidatesByPartyNameAndLS(fetchedCandidates, 'filteredCandidates');
  };

  const apiTerms = qs.stringify(mapApiTerms(ls('op.wizard')));

  // Data refresh hooks
  useEffect(() => {
    // vacancia path: refresh "candidates" state!
    fetchStoreCandidates();
  }, []);

  useEffect(() => {
    // internal path, whenever filters change:
    //// update "candidates" state based on filters!
    //// FilterModal takes care of updating local storage
    setCandidates(ls('op.wizard').filteredCandidates);
  }, [filters]);

  const location = ls('op.wizard').location;
  const seats = fetchSeats(location);

  if (!candidates || !seats) {
    return <LoadingScreen />;
  }

  const totalNumberOfCandidates = Object.entries(candidates).reduce(
    (prev, value) => value[1].length + prev,
    0,
  );

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
          {favorites.length ? (
            <FavoriteButton
              text="Mis posibles opciones"
              onClick={() => Router.push('/favorites')}
            />
          ) : null}
        </Styled.Row>
        <Styled.Title>
          Explora {totalNumberOfCandidates !== 1 ? 'tus' : 'tu'}{' '}
          {totalNumberOfCandidates !== 1
            ? `${totalNumberOfCandidates} opciones`
            : 'única opción'}
        </Styled.Title>
        <Styled.FilterButton
          type="transparent"
          onClick={() => setFilterModalState(true)}
        />
        <Styled.Chip type={'good'}>
          <strong>{startCasePeruvianRegions(location)}</strong> tendrá{' '}
          <strong>{simplePluralize(seats?.data?.seats, 'sitio')}</strong> en el
          congreso.
        </Styled.Chip>
        {Object.keys(candidates).length ? (
          <Styled.Results>{showPartyCards(candidates)}</Styled.Results>
        ) : (
          <Styled.NoCandidatesChip type="bad">
            <span>Creo que estás pidiendo mucho.</span>
          </Styled.NoCandidatesChip>
        )}
      </Styled.Step>
    </Styled.Container>
  );
}
