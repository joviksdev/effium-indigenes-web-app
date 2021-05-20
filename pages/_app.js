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
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
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
