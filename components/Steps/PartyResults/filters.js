import hasDriverLicenseIssue from 'components/Steps/CandidateResults/hasDriverLicenseIssue';

// Genre section
export const byGenre = (candidates, genre) =>
  candidates
    ? candidates.filter((candidate) => candidate.id_sexo === genre)
    : [];
export const onlyMale = (data) => byGenre(data, 'M');
export const onlyFemale = (data) => byGenre(data, 'F');

// JNE Income section
export const hasJNEIncome = (candidates) =>
  candidates.filter((candidate) => candidate.ingreso_total > 0);

// Experience section
export const hasPublicServiceExperience = (candidates) =>
  candidates.filter((candidate) => !!candidate.experiencia_publica);
export const hasPrivateWorkExperience = (candidates) =>
  candidates.filter((candidate) => !!candidate.experiencia_privada);

// Education section
// We treat everything starting with 'educacion_superior' as just 'superior' grade
export const byStudies = (candidates, grade) =>
  candidates
    ? candidates.filter((candidate) =>
        grade === 'superior'
          ? Object.keys(candidate)
              .filter((propertyName) =>
                propertyName.includes('educacion_superior'),
              )
              .some((propertyName) => !!candidate[propertyName])
          : !!candidate[`educacion_${grade}`],
      )
    : [];
export const upToPrimary = (data) => byStudies(data, 'primaria');
export const upToSecondary = (data) => byStudies(data, 'secundaria');
export const upToHighSchool = (data) => byStudies(data, 'superior');
export const upToPostgraduate = (data) => byStudies(data, 'postgrado');

// Member state section
export const isMilitantMember = (candidates) =>
  candidates.filter((candidate) => candidate.designado === 'No');
export const isGuestMember = (candidates) =>
  candidates.filter((candidate) => candidate.designado === 'Sí');

// Sanctions section
export const doesntHaveSanctionsWithSunat = (candidates) =>
  candidates.filter((candidate) => candidate.deuda_sunat === 0);
export const doesntHaveSanctionsWithServir = (candidates) =>
  candidates.filter(
    (candidate) => candidate.sancion_servir_registro === 'No registra',
  );
export const doesntHaveSanctionsWithDriving = (candidates) =>
  candidates.filter(
    (candidate) =>
      candidate.papeletas_sat === 0 &&
      !hasDriverLicenseIssue(candidate.licencia_conducir),
  );

// Sentences parliament candidates
export const doesntHaveCivilSanctions = (candidates) =>
  candidates.filter((candidate) => candidate.sentencias_ec_civil_cnt === 0);
export const doesntHavePenalSanctions = (candidates) =>
  candidates.filter((candidate) => candidate.sentencias_ec_penal_cnt === 0);

const filterMap = {
  onlyMale,
  onlyFemale,
  hasPublicServiceExperience,
  hasPrivateWorkExperience,
  hasJNEIncome,
  upToPrimary,
  upToSecondary,
  upToHighSchool,
  upToPostgraduate,
  isMilitantMember,
  isGuestMember,
  doesntHaveSanctionsWithSunat,
  doesntHaveSanctionsWithServir,
  doesntHaveSanctionsWithDriving,
  doesntHaveCivilSanctions,
  doesntHavePenalSanctions,
};

export const applyFilter = (data) => (filter) => filter(data);
export const applyFilters = (data) => (filters) =>
  filters.reduce((prev, filter) => applyFilter(prev)(filterMap[filter]), data);
