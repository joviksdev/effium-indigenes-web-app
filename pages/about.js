import React from 'react';
import Head from 'next/head';
import Layout from '../components/layouts';
import Content from '../components/about';

const About = () => {
	return (
		<>
			<Head>
				<title>Effium Indigennes || About</title>
				<meta name='keywords' content='Effium history' />
				<meta name='keywords' content='History of effium' />
				<meta name='keywords' content='Official effium website' />
				<meta name='keywords' content='effium festival' />
				<meta
					name='description'
					content='Effium is a distinct tribe of Orrin ethnic group- an Igbo sub ethnic nationality that is comprised of the following tribes: Effium, Ntezi, Okpoto, Amuda/Idzem, and Okpomolo which are Orrin tribes in Ebonyi State, Utonkon/Uffia- an Orrin tribe in Benue State and Ukelle- an Orrin tribe in Cross River State among others.'
				/>
				<meta
					name='description'
					name='Effium people (originally known as Uffiom) have various traditional ceremonies which are usually observed to mark the end of the year, the beginning of the year, first quarter of the year, and the middle of the year.'
				/>
				<meta
					name='description'
					name='The Association of Effium Indigenes International (ASSEI) is an official umbrella body of all Effium aborigines/indigenes worldwide that works for the interest of all Effium people and community.'
				/>
			</Head>
			<Layout>
				<Content />
			</Layout>
		</>
	);
};

export default About;
