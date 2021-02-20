import { useState } from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import Router from 'next/router';
import ls from 'local-storage';
import * as Styled from './styles';
import Loading from 'components/Loading';
import startCasePeruvianRegions from 'components/Steps/PartyResults/startCasePeruvianRegions';

const LoadingScreen = () => {
  return (
    <Styled.Container>
      <Styled.Header />
      <Loading />
    </Styled.Container>
  );
};

export default function Step1() {
  const [location, setLocation] = useState(null);

  const handleSelectChange = (event) => {
    setLocation(event.target.value);
  };

  const onContinueClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), location });
    Router.push('/steps/2');
  };

  const onExpatClick = (event) => {
    ls('op.wizard', {
      ...ls('op.wizard'),
      location: 'PERUANOS RESIDENTES EN EL EXTRANJERO',
    });
    Router.push('/steps/2');
  };

  const { data, error } = useSWR('/api/locations', () =>
    fetch(`${process.env.api.locationsUrl}`).then((data) => data.json()),
  );

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.GoBackButton to={'/'} text="Regresa" />
      <Styled.Step>
        <Styled.Stepper steps={1} of={3} />
        <Styled.Chip>
          <strong>Recuerda</strong>
          <Styled.TextInfo>
            Los candidatos para Lima Provincias o Callao son distintos para Lima
            Metropolitana.
          </Styled.TextInfo>
        </Styled.Chip>
        <Styled.Title>¿En dónde votarás?</Styled.Title>
        <Styled.Select onChange={handleSelectChange}>
          <option>Seleccione uno</option>
          {data?.data.map((location) => {
            if (location !== 'PERUANOS RESIDENTES EN EL EXTRANJERO') {
              return (
                <option key={location} value={location}>
                  {startCasePeruvianRegions(location)}
                </option>
              );
            }
          })}
        </Styled.Select>
        <Styled.LinkButton onClick={onExpatClick}>
          Vivo en el extranjero
        </Styled.LinkButton>
      </Styled.Step>
      <Styled.Button onClick={onContinueClick}>Continuar</Styled.Button>
    </Styled.Container>
  );
}
