import React from 'react';
import styles from './styles';

// Material-ui/Core
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const circularProgress = () => {
	const classes = useStyles();
	return <CircularProgress className={classes.circularProgress} />;
};

export default circularProgress;
