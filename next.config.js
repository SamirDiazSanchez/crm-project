const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/crm-project/' : '',
  assetPrefix: isProd ? './crm-project/' : ''
}