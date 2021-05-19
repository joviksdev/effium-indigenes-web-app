import React from 'react';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Festival = () => {
	const classes = useStyles();
	return (
		<Box id='festival' marginTop='40px'>
			<Typography className={classes.subHeaderText} variant='h6'>
				Festival
			</Typography>
			<Box marginTop='20px'>
				<Typography
					style={{ marginBottom: '15px' }}
					className={classes.text}
					variant='body1'
				>
					<span className={classes.entryText}>Effium</span> people have
					different cultural festivals that mark aboriginal calendars, rituals,
					and celebrations. Festivals such as Inyumafia 1, And Inyumafia 2,
					Kijasetuo, Igwolo, and Joha. Effium share common boundary with; Izzi,
					Ngbo, Uli and Igumale tribe in Benue.
				</Typography>
			</Box>
		</Box>
	);
};

export default Festival;
