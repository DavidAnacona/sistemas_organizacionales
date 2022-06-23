/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ['en-US', 'es-ES'],
		defaultLocale: 'en-US',
	},
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};

		return config;
	},
};
