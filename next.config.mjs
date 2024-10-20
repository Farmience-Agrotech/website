const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? '/website/' : '',
  basePath: isProd ? '/website' : '',
};
