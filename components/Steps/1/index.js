import { useState } from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import Router from 'next/router';
import ls from 'local-storage';
import * as Styled from './styles';
import Loading from 'components/Loading';

const capitalize = (text) => {
  if (typeof text !== 'string') {
    return '';
  }
  return text
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word !== 'de'
        ? word.replace(word[0], word[0].toUpperCase())
        : word;
    })
    .join(' ');
};

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
    fetch(`${process.env.api.locationsUrl}`).then(data => data.json()),
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
        <Styled.Title>¿Dónde vives?</Styled.Title>
        <Styled.Paragraph align="center">
          Con este filtro solo te mostraremos candidatos para tu departamento.
        </Styled.Paragraph>
        <Styled.Select onChange={handleSelectChange}>
          <option>Seleccione uno</option>
          {data?.data.map(location => {
            if (location !== 'PERUANOS RESIDENTES EN EL EXTRANJERO') {
              return (
                <option key={location} value={location}>
                  {capitalize(location)}
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
