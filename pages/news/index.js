import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layouts';
import NewsItem from './NewsItem';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const contact = () => {
	const classes = useStyles();
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
				<Box marginTop='20px' className={classes.container}>
					<NewsItem />
				</Box>
			</Layout>
		</>
	);
};

export default contact;
