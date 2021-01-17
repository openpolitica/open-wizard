import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import qs from 'qs';
import * as Styled from './styles';
import Loading from 'components/Loading';

const mapApiTerms = (options) => ({
  vacancia: options.impeachment,
  sentencias: options.withSentence,
  region: options.location,
  role: 'CONGRESISTA DE LA REPÚBLICA',
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
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const location = ls('op.wizard').location;
  const apiTerms = qs.stringify(mapApiTerms(ls('op.wizard')));
  const { data, error } = useSWR('key', () =>
    fetch(`https://api.openpolitica.com/candidates?${apiTerms}`).then((data) =>
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
        <Styled.Stepper steps={4} of={4} />
        <Styled.Title align="center">Mis posibles candidatos</Styled.Title>
        <Styled.ResultExplanation>
          Tus posibles candidatos de{' '}
          <Styled.Location>{location.toLowerCase()}</Styled.Location>
        </Styled.ResultExplanation>
        <Styled.ResultInstructions>
          Ingresa a los perfiles de los candidatos y elige a tus{' '}
          <strong>
            dos candidatos preferidos y que sean del mismo partido.
          </strong>
        </Styled.ResultInstructions>
        <Styled.Candidates>
          {data.data.candidates.map((candidate, index) => (
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
