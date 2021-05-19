import Layout from '../components/layouts';
import Gallery from '../components/gallery';
import History from '../components/about/summary';
import NewsHighlight from '../components/news/highlight';
import Carousel from '../components/carousel/HomePageCarousel';
import Membership from '../components/parser/Membership';

export default function Home() {
	return (
		<Layout>
			{/* <Carousel /> */}
			<Membership />
			<History />
			<NewsHighlight />
			<Gallery />
		</Layout>
	);
}
