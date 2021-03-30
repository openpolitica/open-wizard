import * as Styled from './styles';

import Image from 'next/image';
import Router from 'next/router';
import { Fragment } from 'react';
import GoBackButton from '../GoBackButton';

export default function PresidentialNoResults() {
  return (
    <Fragment>
      <GoBackButton to="/presidential-steps/2" text="Regresa" />
      <Styled.Title>Resultados</Styled.Title>
      <Styled.Chip type="bad">
        <strong>No te pases, pues.</strong> <br /> Responde al menos 3 preguntas
        para obtener un resultado.
      </Styled.Chip>
      <Image
        src="/images/no-results-plan-governance.png"
        width="305"
        height="173"
      />
      <Styled.Button
        type={'primary'}
        onClick={() => Router.push('/presidential-steps/2')}
        text="Realiza de nuevo el cuestionario"
      />
    </Fragment>
  );
}
