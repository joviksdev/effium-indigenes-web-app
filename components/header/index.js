import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '../../context/app/appContext';
import IconList from './logo-lists';
import styles from './styles';
import HeaderNav from '../nav/HeaderNav';

// MAterial-ui/Core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

// MAterial-Ui/Icons
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(styles);

const Index = () => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { toggleDrawer } = appContext;
	return (
		<AppBar className={classes.appBar} position='static'>
			<Toolbar>
				<Box
					className={classes.container}
					width='100%'
					display='flex'
					justifyContent='space-between'
					alignItems='center'
				>
					<Hidden xsDown implementation='css'>
						<IconList />
					</Hidden>
					<Typography className={classes.appHeaderText}>
						<Link href='/'>
							<a>Effium Indigenes</a>
						</Link>
					</Typography>
					<Hidden xsDown implementation='css'>
						<Button className={classes.loginBtn}>
							<PersonIcon />
							<Typography variant='body2'>log in</Typography>
						</Button>
					</Hidden>
					<Hidden smUp implementation='css'>
						<Button onClick={toggleDrawer} className={classes.btn}>
							<MenuIcon />
						</Button>
					</Hidden>
				</Box>
				<Box>
					<Hidden xsDown implementation='css'>
						<HeaderNav />
					</Hidden>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Index;
