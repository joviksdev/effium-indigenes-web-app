import React from 'react';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const CustomAndTradition = () => {
	const classes = useStyles();
	return (
		<Box id='custom-and-tradition' marginTop='40px'>
			<Typography className={classes.subHeaderText} variant='h6'>
				Custom and Tradition
			</Typography>
			<Box marginTop='20px'>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					<span className={classes.entryText}>Effium</span> people (originally
					known as Uffiom) have various traditional ceremonies which are usually
					observed to mark the end of the year, the beginning of the year, first
					quarter of the year, and the middle of the year.
				</Typography>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					Example Inyumafia 2 is usually celebrated to mark the last quarter of
					the year. Effium people have different masquerades such as omebe, ikpa
					se ogbodo, igolo, okemma, akatakpa, etc.
				</Typography>
			</Box>
		</Box>
	);
};

export default CustomAndTradition;
