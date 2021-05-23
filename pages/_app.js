import '../styles/globals.css';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import AppState from '../context/app/AppState';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import AOS from 'aos';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	// Initialize animate on scroll
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 50,
		});
	}, []);

	return (
		<AppState>
			<Head>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
				<link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-256x256.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
				<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
				<meta name='application-name' content='Effium Indigenes App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Effium Indigenes App' />
          <meta name='description' content='Effium Indigenes PWA App' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#0097a7' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:url' content='https://www.effiumindigenes.org/' />
				<meta name='twitter:title' content='Effium Indigenes App' />
				<meta name='twitter:description' content='Effium Indigenes PWA App' />
				<meta name='twitter:image' content='https://www.effiumindigenes.org/static/icons/android-chrome-192x192.png' />
				<meta name='twitter:creator' content='@EffiumIndigenes' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Effium Indigenes App' />
				<meta property='og:description' content='Effium Indigenes PWA App' />
				<meta property='og:site_name' content='Effium Indigenes App' />
				<meta property='og:url' content='https://www.effiumindigenes.org/' />
				<meta property='og:image' content='https://www.effiumindigenes.org/static/icons/apple-touch-icon.png' />
			</Head>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Component {...pageProps} />
		</AppState>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
