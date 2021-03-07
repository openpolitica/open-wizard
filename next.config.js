module.exports = {
  images: {
    domains: ['picsum.photos', 'declara.jne.gob.pe'],
  },
  env: {
    api: {
      baseUrl: 'https://api.openpolitica.com/',
      candidatesUrl: 'https://api.openpolitica.com/candidates',
      locationsUrl: 'https://api.openpolitica.com/locations',
      partiesUrl: 'https://api.openpolitica.com/parties',
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
