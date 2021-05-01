import React from 'react';
import Link from 'next/link';
import styles from './styles';

// MAterial-ui/Core
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const LinkWrapper = ({ href, title }) => {
	const classes = useStyles();
	return (
		<Link href={href}>
			<a className={classes.link}>
				{title} <ArrowRightAltIcon />
			</a>
		</Link>
	);
};

export default LinkWrapper;
