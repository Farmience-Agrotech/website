const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  assetPrefix: isProd ? '/website/' : '',
  basePath: isProd ? '/website' : '',
};
