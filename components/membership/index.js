import React from 'react';
import Form from '../form/MembershipForm';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Index = () => {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Form />
		</Box>
	);
};

export default Index;
