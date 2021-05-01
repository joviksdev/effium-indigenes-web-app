import React from 'react';
import styles from './styles';

// MAterial-ui/Core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

// Material-ui/Icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(styles);

const LogoLists = () => {
	const classes = useStyles();
	const lists = [
		{ name: 'facebook', path: '/', icon: <FacebookIcon /> },
		{ name: 'twitter', path: '/', icon: <TwitterIcon /> },
		{ name: 'instagram', path: '/', icon: <InstagramIcon /> },
	];
	return (
		<List className={classes.list}>
			{lists.map((list, key) => (
				<Tooltip key={key} title={list.name} placement='bottom'>
					<ListItem button>{list.icon}</ListItem>
				</Tooltip>
			))}
		</List>
	);
};

export default LogoLists;
