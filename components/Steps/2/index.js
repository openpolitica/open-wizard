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
      <Styled.Step>
        <Styled.Stepper steps={2} of={4} />
        <Styled.Title align="center">
          ¿Incluimos candidatos con sentencias en el Poder Judicial?
        </Styled.Title>
        <Styled.YesNoButton
          onYesButtonClick={onYesButtonClick}
          onNoButtonClick={onNoButtonClick}
        />
      </Styled.Step>
    </Styled.Container>
  );
}
