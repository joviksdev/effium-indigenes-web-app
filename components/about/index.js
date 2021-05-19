import React from 'react';
import styles from './styles';
import History from './History';
import CustomAndTradition from './CustomAndTradition';
import Festival from './Festival';
import Association from './Association';
import SideMenu from './SideMenu';

// Material-UI/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Wrapper = () => {
	const classes = useStyles();

	return (
		<Box position='relative' className={classes.container}>
			<SideMenu />
			<History />
			<CustomAndTradition />
			<Festival />
			<Association />
		</Box>
	);
};

export default Wrapper;
