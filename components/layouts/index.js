import Footer from '../footer';
import Header from '../header';
import Drawer from '../drawer';
import styles from './styles';

// Material-UI
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Layout = ({ children }) => {
	const classes = useStyles();
	return (
		<Box
			className={classes.layout}
			position='relative'
			display='flex'
			flexDirection='column'
		>
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
