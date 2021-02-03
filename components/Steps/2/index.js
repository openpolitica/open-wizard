import * as Styled from './styles';
import Router from 'next/router';
import ls from 'local-storage';

export default function Step2() {
  const onYesButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), withSentence: null });
    Router.push('/steps/3');
  };

  const onNoButtonClick = (event) => {
    ls('op.wizard', { ...ls('op.wizard'), withSentence: false });
    Router.push('/steps/3');
  };

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.GoBackButton to={'/steps/1'} text="Regresa" />
      <Styled.Step>
        <Styled.Stepper steps={2} of={4} />
        <Styled.Title align="center">
          ¿Incluimos candidatos con sentencias en el Poder Judicial?
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
