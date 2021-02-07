import capitalize from '../Steps/PartyResults/startCasePeruvianRegions';

const getYear = dateString => {
  return dateString && dateString.includes('/')
    ? dateString.substring(dateString.lastIndexOf('/') + 1)
    : 'N/A';
};

const processCandidateContent = (type, content) => {
  if (type === 'place') {
    return <p>{content}</p>;
  }
  if (type === 'education') {
    let superiorEducationCount = 0;
    return (
      <div>
        <p>
          <strong>Mayor nivel: </strong>
          {content.education_level}
        </p>
        <p>
          <strong>Detalle de estudios superiores:</strong>
        </p>
        {content.education.length > 0
          ? content.education.map(c => {
              if (!c.tipo.includes('BASICA') && c.carrera !== '') {
                superiorEducationCount += 1;
                return (
                  <ul key={c.carrera + c.tipo}>
                    <li>
                      <strong>{c.carrera}</strong> en {c.centro_estudio}{' '}
                      {c.concluida === 0 ? '(no concluída)' : null}
                    </li>
                  </ul>
                );
              }
            })
          : 'No declaró o no registra'}
        {superiorEducationCount === 0 ? <p>No declaró o no registra</p> : null}
      </div>
    );
  }
  if (type === 'experience') {
    if (content.length > 0) {
      let orderedContent = content.sort((a, b) =>
        a.anio_desde < b.anio_desde ? 1 : b.anio_desde < a.anio_desde ? -1 : 0,
      );

      return (
        <>
          {orderedContent.map(c => {
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
  if (type === 'sanction') {
    if (content.length > 0) {
      return content.map(c => {
        return (
          <div key={c.delito}>
            <p>
              <strong>{c.delito}</strong>
            </p>
            <ul>
              <li>{`Tipo: ${c.tipo}`}</li>
              <li>{`Fallo: ${c.fallo}`}</li>
            </ul>
          </div>
        );
      });
    } else {
      return <p>No tiene sentencias registradas.</p>;
    }
  }
  if (type === 'militancy') {
    content = [
      {
        org_politica: 'ALIANZA ELECTORAL SOLIDARIDAD NACIONAL - UPP',
        afiliacion_inicio: '16/12/2015',
        afiliacion_cancelacion: '16/08/2016',
      },
      {
        org_politica: 'ALIANZA SOLIDARIDAD NACIONAL',
        afiliacion_inicio: '23/12/2010',
        afiliacion_cancelacion: '04/08/2011',
      },
      {
        org_politica: 'RENOVACION POPULAR',
        afiliacion_inicio: '05/11/2004',
        afiliacion_cancelacion: '07/12/2004',
      },
    ];
    if (content.length > 0) {
      return content.map(c => {
        return (
          <p key={c.org_politica}>
            {`${c.org_politica} (${getYear(c.afiliacion_inicio)} - ${getYear(
              c.afiliacion_cancelacion,
            )})`}
          </p>
        );
      });
    } else {
      return <p>No tiene sentencias registradas.</p>;
    }
  }
};

export default processCandidateContent;
