import React from 'react';
import NewsItem from '../news/NewsItem';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const contact = () => {
	const classes = useStyles();
	return (
		<Box Style={{ marginTop: '20px' }} className={classes.container}>
			<NewsItem />
		</Box>
	);
};

export default contact;
