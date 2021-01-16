import * as Styled from './styles';
import Router from 'next/router';
import ls from 'local-storage';

export default function Step3() {
  const onYesButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), impeachment: null });
    Router.push('/steps/4');
  };

  const onNoButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), impeachment: false });
    Router.push('/steps/4');
  };

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Stepper steps={3} of={4} />
        <Styled.Title align="center">
          ¿Deseas que te mostremos partidos que votaron a favor de la vacancia a
          Martín Vizcarra?
        </Styled.Title>
        <Styled.YesNoButton
          onYesButtonClick={onYesButtonClick}
          onNoButtonClick={onNoButtonClick}
        />
      </Styled.Step>
    </Styled.Container>
  );
}
