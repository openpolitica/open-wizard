const toggleSlug = (text) => {
  // Let's try to find a way in which we don't rely on this
  if (text === 'frente-popular-agricola-fia-del-peru---frepap') {
    return 'FRENTE POPULAR AGRICOLA FIA DEL PERU - FREPAP';
  }
  if (text === 'partido-popular-cristiano---ppc') {
    return 'PARTIDO POPULAR CRISTIANO - PPC';
  }
  if (text === 'avanza-pais---partido-de-integracion-social') {
    return 'AVANZA PAIS - PARTIDO DE INTEGRACION SOCIAL';
  }
  if (text.includes(' ')) {
    return text.split(' ').join('-').toLowerCase();
  }
  return text.split('-').join(' ').toUpperCase();
};

export default toggleSlug;
