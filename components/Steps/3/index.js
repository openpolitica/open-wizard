import * as Styled from './styles';
import Router from 'next/router';
import ls from 'local-storage';
import GoBackButton from 'components/GoBackButton';

export default function Step3() {
  const onYesButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), impeachment: null });
    Router.push('/steps/party-results');
  };

  const onNoButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), impeachment: false });
    Router.push('/steps/party-results');
  };

  return (
    <>
      <Styled.Header />
      <Styled.Container>
        <GoBackButton route={'/steps/2'} text="Regresa" />
        <Styled.Step>
          <Styled.Stepper steps={3} of={4} />
          <Styled.Title align="center">
            ¿Te mostramos partidos que votaron a favor de la vacancia
            presidencial de Noviembre del 2020?
          </Styled.Title>
          <Styled.YesNoButton
            onYesButtonClick={onYesButtonClick}
            onNoButtonClick={onNoButtonClick}
          />
        </Styled.Step>
      </Styled.Container>
    </>
  );
}
