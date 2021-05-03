import React from 'react';
import ContactForm from './ContactForm';
import styles from './styles';
import ContactDetails from './ContactDetails';
import LocationMap from './LocationMap';

// Material-UI/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Wrapper = () => {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Box className={classes.containerContent}>
				<Box>
					<ContactDetails />
				</Box>
				<Box>
					<ContactForm />
				</Box>
			</Box>
			<LocationMap />
		</Box>
	);
};

export default Wrapper;
