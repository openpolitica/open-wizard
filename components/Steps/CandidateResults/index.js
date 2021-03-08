import { useEffect, useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import { FavoritesContext } from 'hooks/useFavorites';
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
import hasDriverLicenseIssue from './hasDriverLicenseIssue';

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
  const { favorites } = useContext(FavoritesContext);

  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }
  if (!router.query.partyName) {
    router.push('/');
  }
  const partyName = router.query.partyName;

  const [isFilterModalOpen, setFilterModalState] = useState(false);
  const [filters, setFilters] = useState(ls('op.wizard').filters);
  const candidates = ls('op.wizard').filteredCandidates[
    toggleSlug(router.query.partyName)
  ];
  const location = ls('op.wizard').location;

  const { data, error } = useSWR(
    candidates && location
      ? `/api/parties/dirtylists?region=${location}&party=${candidates[0].org_politica_nombre}`
      : null,
    () =>
      fetch(
        `${process.env.api.partiesUrl}/dirtylists?region=${location}&party=${candidates[0].org_politica_nombre}`,
      ).then((data) => data.json()),
  );

  const listIssues = data?.data?.lists[0];
  const badIssues = listIssues
    ? listIssues.sentencias_civiles +
        listIssues.sentencias_penales +
        listIssues.sancion_servir >
      0
    : null;

  const infoIssues = listIssues
    ? listIssues.deuda_sunat + listIssues.papeletas_sat > 0 ||
      hasDriverLicenseIssue(listIssues.licencia_conducir)
    : null;

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
          {favorites.length ? (
            <Styled.SeeFavoritesButton
              icon={
                <img src="../images/icons/starBorderGreen.svg" alt="star" />
              }
              onClick={() => Router.push('/favorites')}
              text="Mis posibles opciones"
            />
          ) : null}
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
        {candidates && infoIssues ? (
          <Styled.ChipCard type="info">
            Alguno de los primeros de esta lista tiene{' '}
            <strong>deudas con SUNAT y/o infracciones de tránsito.</strong>
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
