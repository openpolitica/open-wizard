import Image from 'next/image';
import Router from 'next/router';
import { Fragment } from 'react';
import GoBackButton from 'components/GoBackButton';
import * as Styled from './styles';
import simplePluralize from 'components/Steps/PartyResults/simplePluralize';

export default function PresidentialNoResults({
  minimumRequiredNumberOfAnswers,
}) {
  return (
    <Fragment>
      <GoBackButton to="/presidential-steps/2" text="Regresa" />
      <Styled.Title>Resultados</Styled.Title>
      <Styled.Chip type="bad">
        <strong>No te pases, pues.</strong>
        <Styled.Paragraph>
          Responde al menos{' '}
          {simplePluralize(minimumRequiredNumberOfAnswers, 'pregunta')} para
          obtener un resultado.
        </Styled.Paragraph>
      </Styled.Chip>
      <Image
        src="/images/no-results-plan-governance.png"
        width="305"
        height="173"
      />
      <Styled.Button
        type="primary"
        onClick={() => Router.push('/presidential-steps/2')}
        text="Realiza de nuevo el cuestionario"
      />
    </Fragment>
  );
}
