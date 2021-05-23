const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

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

module.exports = withPWA(
	withImages({
		pwa: {
			dest: 'public',
			runtimeCaching,
		},
	})
);

// module.exports = withPlugins([withImages,])
