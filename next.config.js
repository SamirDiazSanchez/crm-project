const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	assetPrefix: isProd ? './' : '',
	basePath: isProd ? '/crm-project' : '/'
}