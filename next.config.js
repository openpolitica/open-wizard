const apiBase =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'local' ? 'staging-api' : 'api';

module.exports = {
  images: {
    domains: ['picsum.photos', 'declara.jne.gob.pe'],
  },
  env: {
    api: {
      baseUrl: `https://${apiBase}.openpolitica.com/`,
      candidatesUrl: `https://${apiBase}.openpolitica.com/candidates`,
      locationsUrl: `https://${apiBase}.openpolitica.com/locations`,
      partiesUrl: `https://${apiBase}.openpolitica.com/parties`,
      policiesUrl: `https://${apiBase}.openpolitica.com/policies`
    },
    hotjar: {
      id: 2235835,
      version: 6,
    },
    matomo: {
      url: 'https://matomo.openpolitica.com/',
      siteId: 1,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
