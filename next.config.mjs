const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? 'http://farmience.com/' : '',
  basePath: isProd ? '/website' : '',
  output: 'export', // add this line!
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: isProd ? 'https://farmience.com' : '',
  },
};
