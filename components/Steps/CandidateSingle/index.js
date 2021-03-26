import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import * as Styled from './styles';
import { FavoritesContext } from 'hooks/useFavorites';
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

function generateGoBackText(path) {
  if (!ls('op.wizard')) {
    return 'Inicia tu viaje';
  }
  if (path === '/favorites') {
    return 'Posibles opciones';
  }
  return 'Regresa a la Lista';
}

export default function CandidateSingle(props) {
  const router = useRouter();
  const {
    addFavorite,
    favorites,
    removeFavoriteBySystemId: removeFavorite,
  } = useContext(FavoritesContext);
  const [collapsed, setCollapsed] = useState({
    personalInfo: false,
    place: true,
    education: true,
    experience: true,
    income: true,
    sanction: true,
    militancy: true,
  });
  const { candidateId, fromPath } = router.query;
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

  const { data, error } = useSWR(
    candidateId ? `/api/candidates/hoja_vida_id/${candidateId}` : null,
    () =>
      fetch(
        `${process.env.api.candidatesUrl}/hoja_vida_id/${candidateId}`,
      ).then((data) => data.json()),
  );

  if (!data) {
    return <LoadingScreen />;
  }
  const c = data?.data;
  const runsForCongress = c.cargo_nombre.includes('CONGRESISTA');

  const isFavorite = favorites.find(
    (favorite) => c.hoja_vida_id === favorite.hoja_vida_id,
  );

  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Row>
          <GoBackButton
            to={fromPath || '/'}
            text={generateGoBackText(fromPath)}
          />
        </Styled.Row>
        {c.cargo_nombre.includes('VICEPRESIDENTE Y CONGRESISTA') ? (
          <Styled.Chip type="good">
            {`Este candidato está postulando a la ${
              c.cargo_nombre.includes('PRIMER') ? 'Primera' : 'Segunda'
            } Vicepresidencia y al Congreso.`}
          </Styled.Chip>
        ) : null}
        <Styled.CandidateBigCard
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavorite={isFavorite}
          candidate={c}
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
          }
          district={c.postula_distrito}
          candidateGenre={c.id_sexo}
          candidateRole={c.cargo_nombre}
          candidateTwitterLink={c.twitter}
          candidateFacebookLink={c.facebook}
          runsForCongress={runsForCongress}></Styled.CandidateBigCard>
        <Styled.Accordion
          type="personalInfo"
          title="Información personal"
          collapsed={collapsed.personalInfo}
          titleRowClick={onTitleRowClick}
          content={{
            birthdate: c.nacimiento_fecha,
            dni: c.id_dni,
          }}
        />
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
          content={{
            afiliations: c.afiliations,
            processAll: c.procesos_electorales_participados,
            processWin: c.procesos_electorales_ganados,
            moneyContributions: c.aportes_electorales,
          }}
        />
      </Styled.Step>
      {runsForCongress ? (
        isFavorite ? (
          <Styled.FavoriteButton
            text="Sácame de tus opciones"
            type="transparent"
            onClick={() => removeFavorite(c.hoja_vida_id)}
          />
        ) : (
          <Styled.FavoriteButton
            text="Agrégame a tus opciones"
            onClick={() => addFavorite(c)}
          />
        )
      ) : null}
    </Styled.Container>
  );
}
