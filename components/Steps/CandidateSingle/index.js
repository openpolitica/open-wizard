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
  const [isFavorite, setFavorite] = useState(false); // TODO: initial state to match local storage
  const candidateId = router.query.candidateId;
  const comesFromFavorites = false; // TODO: change to props.source

  const isServer = typeof window === 'undefined';
  if (isServer) {
    return <LoadingScreen />;
  }

  const onTitleRowClick = (type) => {
    let newCollapsedObject = {};
    for (const [key, value] of Object.entries(collapsed)) {
      key === type
        ? (newCollapsedObject[key] = !value)
        : (newCollapsedObject[key] = true);
    }
    setCollapsed(newCollapsedObject);
  };

  const onFavoriteAction = (action = 'none') => {
    setFavorite(!isFavorite);
    // TODO: add line to store favorite status in local storage
    if (action === 'exit') {
      router.push(
        ls('op.wizard').filters
          ? !comesFromFavorites
            ? `/results/${toggleSlug(c.org_politica_nombre)}`
            : `/results/${toggleSlug(c.org_politica_nombre)}` // TODO: change to favorites page
          : '/',
      );
    }
  };

  const { data, error } = useSWR(
    candidateId ? '/api/candidates/hoja_vida_id' : null,
    () =>
      fetch(
        `${process.env.api.candidatesUrl}/hoja_vida_id/${candidateId}`,
      ).then((data) => data.json()),
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
                ? !comesFromFavorites
                  ? `/results/${toggleSlug(c.org_politica_nombre)}`
                  : `/results/${toggleSlug(c.org_politica_nombre)}` // TODO: change to favorites page
                : '/'
            }
            text={
              ls('op.wizard')
                ? !comesFromFavorites
                  ? 'Regresa a la lista'
                  : 'Regresa a tus favoritos'
                : 'Inicia tu viaje'
            }
          />
        </Styled.Row>
        <Styled.CandidateBigCard
          starClick={onFavoriteAction}
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
          titleRowClick={onTitleRowClick}
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
          titleRowClick={onTitleRowClick}
          content={{
            education: c.education,
            education_level: c.educacion_mayor_nivel,
          }}
        />
        <Styled.Accordion
          type="experience"
          title="Experiencia"
          collapsed={collapsed.experience}
          titleRowClick={onTitleRowClick}
          content={c.experience}
        />
        <Styled.Accordion
          type="income"
          title="Ingresos y bienes"
          collapsed={collapsed.income}
          titleRowClick={onTitleRowClick}
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
          titleRowClick={onTitleRowClick}
          content={{
            sentencias: c.judgements,
            servir: c.sancion_servir_registro,
            deuda_sunat: c.deuda_sunat,
            licencia: c.licencia_conducir,
            papeletas: c.papeletas_sat,
          }}
        />
        <Styled.Accordion
          type="militancy"
          title="Pasado político"
          collapsed={collapsed.militancy}
          titleRowClick={onTitleRowClick}
          content={c.afiliations}
        />
      </Styled.Step>
      <Styled.FavoriteButton
        text={
          !isFavorite
            ? 'Agrégame a tus favoritos'
            : 'Eliminar como candidato favorito'
        }
        type={!isFavorite ? 'primary' : 'transparent'}
        onClick={() => onFavoriteAction('exit')}
      />
    </Styled.Container>
  );
}
