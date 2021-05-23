import Head from 'next/head';
import Layout from '../components/layouts';
import Gallery from '../components/gallery';
import History from '../components/about/summary';
import NewsHighlight from '../components/news/highlight';
import Carousel from '../components/carousel/HomePageCarousel';
import Membership from '../components/parser/Membership';

// material-ui/core
import Box from '@material-ui/core/Box';

export default function Home() {
	return (
		<Box>
			<Head>
				<title>Effium Indigenes</title>
				<meta name='keywords' content='Effium' />
				<meta name='keywords' content='Effium indigenes' />
				<meta name='keywords' content='Official effium website' />
				<meta
					name='description'
					content='Official web site of the indigenous poeple of effium'
				/>
			</Head>
			<Layout>
				<Membership />
				<Carousel />
				<History />
				<NewsHighlight />
				<Gallery />
			</Layout>
		</Box>
	);
}
