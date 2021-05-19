import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles';
import cx from 'classnames';

//Material-ui/Core
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Material-ui/icons
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(styles);

const SideMenu = () => {
	const classes = useStyles();
	const router = useRouter();
	const [isDisplayMore, setIsDisplayMore] = useState(false);
	const handleToggle = () => setIsDisplayMore(!isDisplayMore);

	const listStyle = cx(classes.list, {
		[classes.translateList]: isDisplayMore,
	});

	const lists = [
		{
			name: 'History',
			path: '/about#history',
		},
		{
			name: 'Custom and tradition',
			path: '/about#custom-and-tradition',
		},
		{
			name: 'Festival',
			path: '/about#festival',
		},
		{
			name: 'ASSEI',
			path: '/about#ASSEI',
		},
	];

	const handleNavigation = (path) => {
		router.push(path);
		handleToggle();
	};

	return (
		<Box>
			<Hidden implementation='css' smUp>
				<List className={listStyle}>
					{lists.map((list, key) => (
						<ListItem
							onClick={() => handleNavigation(list.path)}
							key={key}
							button
						>
							{list.name}
						</ListItem>
					))}
				</List>
				<IconButton onClick={() => handleToggle()} className={classes.moreIcon}>
					{!isDisplayMore ? <UnfoldMoreIcon /> : <CloseIcon />}
				</IconButton>
			</Hidden>
		</Box>
	);
};

export default SideMenu;
