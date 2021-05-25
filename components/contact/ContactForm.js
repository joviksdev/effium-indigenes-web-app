import React, { useState, useContext } from 'react';
import AppContext from '../../context/app/appContext';
import TextField from '../customFormComponents/TextField';
import styles from './styles';
import Alert from '../alert/ToastAlert';
import Spinner from '../spinner/circularProgress';

// Material-UI/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

const ContactForm = () => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { sendMessage } = appContext;
	const [contactDetails, setContactDetails] = useState({
		surname: '',
		firstName: '',
		email: '',
		body: '',
	});
	const { surname, firstName, email, body } = contactDetails;

	const [isRequiredSurname, setIsRequiredSurname] = useState(false);
	const [isRequiredFirstname, setIsRequiredFirstname] = useState(false);
	const [isRequiredEmail, setIsRequiredEmail] = useState(false);
	const [isRequiredBody, setIsRequiredBody] = useState(false);

	// Is Submiting State
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Alert State
	const [alert, setAlert] = useState(null);
	const removeAlert = () => setAlert(null);

	const handleSubmit = async (e) => {
		const emailRex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		e.preventDefault();
		surname === '' ? setIsRequiredSurname(true) : setIsRequiredSurname(false);
		firstName === ''
			? setIsRequiredFirstname(true)
			: setIsRequiredFirstname(false);
		!emailRex.test(email)
			? setIsRequiredEmail(true)
			: setIsRequiredEmail(false);
		body === '' ? setIsRequiredBody(true) : setIsRequiredBody(false);

		if (
			surname !== '' &&
			firstName !== '' &&
			emailRex.test(email) &&
			body !== ''
		) {
			setIsSubmitting(true);
			const res = await sendMessage(contactDetails);
			if (res) {
				if (res.success) {
					setIsSubmitting(false);
					setAlert({ msg: res.payload, type: 'success' });
					setContactDetails({
						surname: '',
						firstName: '',
						email: '',
						body: '',
					});
				} else {
					setIsSubmitting(false);
					setAlert({ msg: res.payload, type: 'error' });
				}
			}
		}
	};

	return (
		<Box position='relative'>
			{alert && (
				<Alert
					style={{ position: 'absolute', width: '100%' }}
					msg={alert.msg}
					type={alert.type}
					closeAlert={removeAlert}
				/>
			)}
			<Typography className={classes.headerText} variant='h6'>
				Say hi, drop a message!!
			</Typography>
			<Box className={classes.flexGrid}>
				<TextField
					style={{ marginBottom: '10px' }}
					variant='outlined'
					label='surname'
					value={surname}
					isError={isRequiredSurname}
					helperText={isRequiredSurname && 'Surname is required'}
					onChange={(e) =>
						setContactDetails({
							...contactDetails,
							surname: e.target.value,
						})
					}
				/>
				<TextField
					style={{ marginBottom: '10px' }}
					variant='outlined'
					label='First name'
					value={firstName}
					isError={isRequiredFirstname}
					helperText={isRequiredFirstname && 'First name is required'}
					onChange={(e) =>
						setContactDetails({
							...contactDetails,
							firstName: e.target.value,
						})
					}
				/>
			</Box>
			<TextField
				style={{ marginBottom: '10px' }}
				fullWidth={true}
				type='email'
				variant='outlined'
				label='email'
				value={email}
				isError={isRequiredEmail}
				helperText={isRequiredEmail && 'Email is required'}
				onChange={(e) =>
					setContactDetails({
						...contactDetails,
						email: e.target.value,
					})
				}
			/>
			<TextField
				multiline={true}
				rows={3}
				style={{ marginBottom: '10px' }}
				fullWidth={true}
				type='message'
				variant='outlined'
				label='message'
				value={body}
				isError={isRequiredBody}
				helperText={isRequiredBody && 'Message is required'}
				onChange={(e) =>
					setContactDetails({
						...contactDetails,
						body: e.target.value,
					})
				}
			/>
			<Button
				disabled={isSubmitting}
				type='submit'
				onClick={handleSubmit}
				className={classes.submitBtn}
			>
				{isSubmitting && <Spinner />}
				send message
			</Button>
		</Box>
	);
};

export default ContactForm;
