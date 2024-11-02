const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? 'https://farmience.com/' : '',
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: isProd ? 'https://farmience.com' : '',
  },
};
