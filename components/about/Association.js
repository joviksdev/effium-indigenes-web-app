import React from 'react';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Association = () => {
	const classes = useStyles();
	return (
		<Box id='ASSEI' marginTop='40px'>
			<Typography className={classes.subHeaderText} variant='h6'>
				The Association of Effium Indigenes International (ASSEI)
			</Typography>
			<Box marginTop='20px'>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					The Association of Effium Indigenes International (ASSEI) is an
					official umbrella body of all Effium aborigines/indigenes worldwide
					that works for the interest of all Effium people and community.
				</Typography>
			</Box>
		</Box>
	);
};

export default Association;
