const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// next.js configuration
/* const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: 'build',
}; */

// module.exports = withImages();
/* module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
}) */

/* module.exports = withPWA(
	withImages({
		pwa: {
			dest: 'public',
			runtimeCaching,
		},
	})
); */

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return withImages();
	}

	return withPWA(
		withImages({
			pwa: {
				dest: 'public',
				runtimeCaching,
			},
		})
	);
};
