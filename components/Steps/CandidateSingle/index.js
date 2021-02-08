import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import * as Styled from './styles';
import Loading from 'components/Loading';
import GoBackButton from 'components/GoBackButton';
import toggleSlug from 'components/PartyCard/toggleSlug';

const LoadingScreen = () => {
  return (
    <Styled.Container>
      <Styled.Header />
      <Loading />
    </Styled.Container>
  );
};

export default function CandidateSingle(props) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState({
    place: false,
    education: true,
    experience: true,
    income: true,
    sanction: true,
    militancy: true,
  });
  const [isFavorite, setFavorite] = useState(false);
  const candidateId = router.query.candidateId;

  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const onChevronClick = type => {
    let newCollapsedObject = {};
    for (const [key, value] of Object.entries(collapsed)) {
      key === type
        ? (newCollapsedObject[key] = !value)
        : (newCollapsedObject[key] = true);
    }
    setCollapsed(newCollapsedObject);
  };

  const onStarClick = (action = 'none') => {
    setFavorite(!isFavorite);
    if (action === 'exit') {
      router.push(
        ls('op.wizard').filters
          ? `/results/${toggleSlug(c.org_politica_nombre)}`
          : '/',
      );
    }
  };

  const { data, error } = useSWR(
    candidateId ? '/api/candidates/hoja_vida_id' : null,
    () =>
      fetch(
        `${process.env.api.candidatesUrl}/hoja_vida_id/${candidateId}`,
      ).then(data => data.json()),
  );

  if (!data) {
    return <LoadingScreen />;
  }
  const c = data?.data;

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton
            to={
              ls('op.wizard')
                ? `/results/${toggleSlug(c.org_politica_nombre)}`
                : '/'
            }
            text={ls('op.wizard') ? 'Regresa a la lista' : 'Inicia tu viaje'}
          />
        </Styled.Row>
        <Styled.CandidateBigCard
          starClick={onStarClick}
          isFavorite={isFavorite}
          profileImageId={candidateId}
          candidateParty={c.org_politica_nombre}
          candidateNumber={c.posicion}
          candidateDesignate={c.designado}
          candidateFullname={
            c.id_nombres +
            ' ' +
            c.id_apellido_paterno +
            ' ' +
            c.id_apellido_materno
          }></Styled.CandidateBigCard>
        <Styled.Accordion
          type="place"
          title="Lugar de nacimiento"
          collapsed={collapsed.place}
          chevronClick={onChevronClick}
          content={{
            departamento: c.nacimiento_departamento,
            provincia: c.nacimiento_provincia,
            pais: c.nacimiento_pais,
          }}
        />
        <Styled.Accordion
          type="education"
          title="Educación"
          collapsed={collapsed.education}
          chevronClick={onChevronClick}
          content={{
            education: c.education,
            education_level: c.educacion_mayor_nivel,
          }}
        />
        <Styled.Accordion
          type="experience"
          title="Experiencia"
          collapsed={collapsed.experience}
          chevronClick={onChevronClick}
          content={c.experience}
        />
        <Styled.Accordion
          type="income"
          title="Ingresos y bienes"
          collapsed={collapsed.income}
          chevronClick={onChevronClick}
          content={{
            ingreso_total: c.ingreso_total,
            ingreso_total_privado: c.ingreso_total_privado,
            ingreso_total_publico: c.ingreso_total_publico,
            bienes_muebles_valor: c.bienes_muebles_valor,
            bienes_inmuebles_valor: c.bienes_inmuebles_valor,
          }}
        />
        <Styled.Accordion
          type="sanction"
          title="Sanciones e infracciones"
          collapsed={collapsed.sanction}
          chevronClick={onChevronClick}
          content={c.judgements}
        />
        <Styled.Accordion
          type="militancy"
          title="Pasado político"
          collapsed={collapsed.militancy}
          chevronClick={onChevronClick}
          content={c.afiliations}
        />
      </Styled.Step>
      {/* <Styled.FavoriteButton
        text={
          !isFavorite ? 'Agrégame a tus favoritos' : 'Sácame de tus favoritos'
        }
        onClick={() => onStarClick('exit')}
      /> */}
    </Styled.Container>
  );
}
