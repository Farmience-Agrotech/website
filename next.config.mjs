const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? 'https://github.com/Farmience-Agrotech/website.git' : '',
  basePath: isProd ? 'https://github.com/Farmience-Agrotech/website.git' : '',
};
