const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	assetsPrefix: isProd ? './crm-project/' : '',
	basePath: '/crm-project'
}