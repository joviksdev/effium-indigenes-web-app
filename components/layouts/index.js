import Footer from '../footer';
import Header from '../header';
import Drawer from '../drawer';

// Material-UI
import Box from '@material-ui/core/Box';

const Layout = ({ children }) => {
	return (
		<Box display='flex' flexDirection='column' minHeight='100vh'>
			<Drawer />
			<Header />
			<Box flex='1'>
				<main>{children}</main>
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
