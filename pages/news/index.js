import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layouts';

// Material-ui/Core
import Box from '@material-ui/core/Box';

const contact = () => {
	return (
		<>
			<Head>
				<title>Effium Indigennes || Contact</title>
				<meta
					name='description'
					content='Do well to contact us or follow us on any of our social media platform.'
				/>
			</Head>
			<Layout>
				<Box>News</Box>
			</Layout>
		</>
	);
};

export default contact;
