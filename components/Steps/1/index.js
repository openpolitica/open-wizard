import { useState } from 'react';
import Router from 'next/router';
import ls from 'local-storage';
import { locations } from './locations';
import * as Styled from './styles';
import GoBackButton from 'components/GoBackButton';

const capitalize = (text) => {
  if (typeof text !== 'string') {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
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

  return (
    <>
      <Styled.Header />
      <Styled.Container>
        <GoBackButton route={'/'} text="Regresa" />
        <Styled.Step>
          <Styled.Stepper steps={1} of={4} />
          <Styled.Title>¿Dónde vives?</Styled.Title>
          <Styled.Paragraph align="center">
            Con este filtro solo te mostraremos candidatos para tu departamento.
          </Styled.Paragraph>
          <Styled.Select onChange={handleSelectChange}>
            <option>Seleccione uno</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {capitalize(location)}
              </option>
            ))}
          </Styled.Select>
          <Styled.LinkButton onClick={onExpatClick}>
            Vivo en el extranjero
          </Styled.LinkButton>
        </Styled.Step>
        <Styled.Button onClick={onContinueClick}>Continuar</Styled.Button>
      </Styled.Container>
    </>
  );
}
