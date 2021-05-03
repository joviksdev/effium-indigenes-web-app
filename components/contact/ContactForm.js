import React from 'react';
import TextField from '../customFormComponents/TextField';
import styles from './styles';

// Material-UI/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

const ContactForm = () => {
	const classes = useStyles();
	return (
		<Box>
			<Typography className={classes.headerText} variant='h6'>
				Say hi, drop a message!!
			</Typography>
			<Box className={classes.flexGrid}>
				<TextField
					style={{ marginBottom: '10px' }}
					variant='outlined'
					label='surname'
				/>
				<TextField
					style={{ marginBottom: '10px' }}
					variant='outlined'
					label='First name'
				/>
			</Box>
			<TextField
				style={{ marginBottom: '10px' }}
				fullWidth={true}
				type='email'
				variant='outlined'
				label='email'
			/>
			<TextField
				multiline={true}
				rows={3}
				style={{ marginBottom: '10px' }}
				fullWidth={true}
				type='message'
				variant='outlined'
				label='email'
			/>
			<Button className={classes.submitBtn}>send message</Button>
		</Box>
	);
};

export default ContactForm;
