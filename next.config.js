const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	assetPrefix: isProd ? './crm-project/' : '',
	basePath: '/crm-project'
}