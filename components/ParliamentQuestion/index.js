import * as Styled from './styles';
import Router from 'next/router';
import ls from 'local-storage';

export default function ParliamentQuestion() {
  const onYesButtonClick = (event) => {
    ls('op.parliament', { ...ls('op.parliament'), sentencias: null });
    Router.push('/parliament-results/grouped-by-party');
  };

  const onNoButtonClick = (event) => {
    ls('op.parliament', { ...ls('op.parliament'), sentencias: false });
    Router.push('/parliament-results/grouped-by-party');
  };

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.GoBackButton to="/" text="Regresa" />
      <Styled.Step>
        <Styled.Chip>
          <strong>Recuerda</strong>
          <Styled.TextInfo>
            Sentencia condenatoria es que fue procesado y hallado culpable.
            <Styled.TextDetail>Ejemplo: Prisión efectiva.</Styled.TextDetail>
          </Styled.TextInfo>
        </Styled.Chip>
        <Styled.Title align="center">
          ¿Incluimos candidatos con sentencias en el Poder Judicial?
        </Styled.Title>
      </Styled.Step>
      <Styled.YesNoButtons>
        <Styled.NoButton onClick={onNoButtonClick}>
          Ocultar candidatos
        </Styled.NoButton>
        <Styled.YesButton type="transparent" onClick={onYesButtonClick}>
          Incluir candidatos
        </Styled.YesButton>
      </Styled.YesNoButtons>
    </Styled.Container>
  );
}
