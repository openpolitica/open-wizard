import capitalize from '../Steps/PartyResults/startCasePeruvianRegions';
import hasDriverLicenseIssue from 'components/Steps/CandidateResults/hasDriverLicenseIssue';

const getYear = (dateString) => {
  return dateString && dateString.includes('/')
    ? dateString.substring(dateString.lastIndexOf('/') + 1)
    : 'N/A';
};

const getMonth = (dateString) => {
  return dateString.substring(
    dateString.indexOf('/') + 1,
    dateString.lastIndexOf('/'),
  );
};

const getDay = (dateString) => {
  return dateString.substring(0, dateString.indexOf('/'));
};

const getAge = (dateString) => {
  const year = getYear(dateString);
  const month = getMonth(dateString);
  const day = getDay(dateString);
  const birthday = new Date(`${year}-${month}-${day}`);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const wrongCareers = [
  '0',
  'FALTA',
  'AUN SIN GRADO',
  'NO',
  'NINGUNO',
  'NO APLICA',
  'NO TENGO',
  'NO TIENE',
  'POR OBTENER',
  'PROCESO',
  '-',
];

const processCandidateContent = (type, content) => {
  if (type === 'information') {
    return (
      <div>
        <p>
          <strong>Edad:</strong> {getAge(content.birthdate)} años
        </p>
        <p>
          <strong>DNI:</strong> {content.dni}
        </p>
      </div>
    );
  }
  if (type === 'place') {
    return (
      <p>
        {content.departamento
          ? `${content.provincia}, ${content.departamento}`
          : content.pais}
      </p>
    );
  }
  if (type === 'education') {
    let superiorEducationCount = 0;
    if (content) {
      let orderedEducationDetails = content.education
        ? content.education.sort((a, b) =>
            a.tipo < b.tipo ? 1 : b.tipo < a.tipo ? -1 : 0,
          )
        : 0;
      return (
        <div>
          <p>
            <strong>Mayor nivel: </strong>
            {content.education_level}
          </p>
          <p>
            <strong>Detalle de estudios superiores:</strong>
          </p>
          {orderedEducationDetails.length > 0
            ? orderedEducationDetails.map((c) => {
                if (!c.tipo.includes('BASICA') && c.carrera !== '') {
                  superiorEducationCount += 1;
                  return (
                    <ul key={c.carrera + c.tipo}>
                      <li>
                        <strong>
                          {capitalize(
                            !wrongCareers.includes(c.carrera)
                              ? c.carrera
                              : 'Carrera no especificada',
                          )}
                        </strong>{' '}
                        en {capitalize(c.centro_estudio)}{' '}
                        {c.concluyo === 0 ? '(no concluída)' : null}
                      </li>
                    </ul>
                  );
                }
              })
            : 'No declaró o no registra'}
          {superiorEducationCount === 0 ? (
            <p>No declaró o no registra</p>
          ) : null}
        </div>
      );
    }
  }
  if (type === 'experience') {
    if (content && content.length > 0) {
      let orderedContent = content.sort((a, b) =>
        a.anio_desde < b.anio_desde ? 1 : b.anio_desde < a.anio_desde ? -1 : 0,
      );

      return (
        <>
          {orderedContent.map((c) => {
            return (
              <ul key={c.ocupacion_profesion_cargo + c.anio_desde}>
                <li>
                  <strong>{capitalize(c.ocupacion_profesion_cargo)}</strong> en{' '}
                  {capitalize(c.centro_trabajo_org_politica)} ({c.anio_desde} -{' '}
                  {c.anio_hasta !== 0 ? c.anio_hasta : ''})
                </li>
              </ul>
            );
          })}
        </>
      );
    } else {
      return <p>No declaró o no registra</p>;
    }
  }
  if (type === 'income') {
    if (content) {
      return (
        <>
          <p>
            <strong>Ingresos 2019: </strong>{' '}
            {`S/. ${content.ingreso_total.toLocaleString('en')}`}
          </p>
          <ul>
            <li>{`Sector privado: S/. ${content.ingreso_total_privado.toLocaleString(
              'en',
            )}`}</li>
            <li>{`Sector público: S/. ${content.ingreso_total_publico.toLocaleString(
              'en',
            )}`}</li>
          </ul>
          <p>
            <strong>Valor bienes: </strong>
            {`S/. ${(
              content.bienes_muebles_valor + content.bienes_inmuebles_valor
            ).toLocaleString('en')}`}
          </p>
          <ul>
            <li>{`Bienes muebles: S/. ${content.bienes_muebles_valor.toLocaleString(
              'en',
            )}`}</li>
            <li>{`Bienes inmuebles: S/. ${content.bienes_inmuebles_valor.toLocaleString(
              'en',
            )}`}</li>
          </ul>
        </>
      );
    }
  }
  if (type === 'sanction') {
    const sanctionArray = [];
    if (content) {
      if (content.sentencias.length > 0) {
        sanctionArray.push(
          <div key="judgements">
            <h4>Sentencias</h4>
            {content.sentencias.map((c) => {
              return (
                <div key={c.delito}>
                  <ul>
                    <li>{`Delito: ${c.delito} (${c.tipo})`}</li>
                    <li>{`Fallo: ${c.fallo}`}</li>
                  </ul>
                </div>
              );
            })}
          </div>,
        );
      }
      if (content.servir !== 'No registra') {
        sanctionArray.push(
          <div key="servir">
            <p>
              <strong>Sanción Servir: </strong>
              {content.servir}
            </p>
          </div>,
        );
      }
      if (content.deuda_sunat > 0) {
        sanctionArray.push(
          <div key="sunat">
            <p>
              <strong>Deuda con Sunat: </strong>
              {content.deuda_sunat}
            </p>
          </div>,
        );
      }
      if (content.papeletas > 0) {
        sanctionArray.push(
          <div key="papeletas">
            <p>
              <strong>Papeletas SAT: </strong>
              {content.papeletas}
            </p>
          </div>,
        );
      }
      if (hasDriverLicenseIssue(content.licencia)) {
        sanctionArray.push(
          <div key="licencia">
            <p>
              <strong>Licencia de conducir: </strong>
              {content.licencia}
            </p>
          </div>,
        );
      }
      if (sanctionArray.length > 0) {
        return sanctionArray;
      }
    }
    return <p>No tiene sentencias o sanciones registradas.</p>;
  }
  if (type === 'militancy') {
    if (content && content.length > 0) {
      return content.map((c) => {
        return (
          <p key={c.org_politica}>
            {`${c.org_politica} (${getYear(c.afiliacion_inicio)} - ${getYear(
              c.afiliacion_cancelacion,
            )})`}
          </p>
        );
      });
    } else {
      return <p>No registra historial político.</p>;
    }
  }
};

export default processCandidateContent;
