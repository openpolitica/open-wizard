import * as Styled from './styles';
import Router from 'next/router';
import ls from 'local-storage';

export default function Step3() {
  const onYesButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), impeachment: null });
    Router.push('/results/grouped-by-party');
  };

  const onNoButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), impeachment: false });
    Router.push('/results/grouped-by-party');
  };

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.GoBackButton to={'/steps/2'} text="Regresa" />
      <Styled.Step>
        <Styled.Stepper steps={3} of={3} />
        <Styled.Title align="center">
          ¿Te mostramos partidos que votaron a favor de la vacancia presidencial
          de Noviembre del 2020?
        </Styled.Title>
        <Styled.NoButton onClick={onNoButtonClick}>
          No, ni hablar
        </Styled.NoButton>
        <Styled.YesButton type="transparent" onClick={onYesButtonClick}>
          Déjalos, está bien
        </Styled.YesButton>
      </Styled.Step>
    </Styled.Container>
  );
}
