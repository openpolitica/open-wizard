import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import groupBy from 'lodash.groupby';
import * as Styled from './styles';
import PartyCard from 'components/PartyCard';
import Loading from 'components/Loading';
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

  const location = ls('op.wizard').location;
  const apiTerms = qs.stringify(mapApiTerms(ls('op.wizard')));
  const { data, error } = useSWR('key', () =>
    fetch(`${process.env.api.candidatesUrl}${apiTerms}`).then((data) =>
      data.json(),
    ),
  );

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <GoBackButton route={'/steps/3'} text="Regresa" />
        <Styled.FilterButton />
        <Styled.Title>Explora tus opciones</Styled.Title>
        <Styled.Chip>Utiliza los filtros para refinar tu búsqueda</Styled.Chip>
        <Styled.Results>
          {groupCandidatesByPartyName(data.data.candidates)}
        </Styled.Results>
      </Styled.Step>
    </Styled.Container>
  );
}
