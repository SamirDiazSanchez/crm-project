const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '' : '/docs',
  assetPrefix: isProd ? './' : '/crm-project/'
}