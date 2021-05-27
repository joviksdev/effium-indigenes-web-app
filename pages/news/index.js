import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layouts';
import NewsItem from '../../components/news/NewsItem';
import News from '../../components/news/News';

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
				<News>
					<NewsItem />
				</News>
			</Layout>
		</>
	);
};

export default contact;
