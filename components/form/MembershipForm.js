import React from 'react';
import styles from './styles';
import CustomTextField from '../customFormComponents/TextField';
import country from '../../assets/data/country.json';
import TextField from '@material-ui/core/TextField';
import CustomSelect from '../customFormComponents/CustomSelect';

// Material-ui/core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

// Material-ui/Icon
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(styles);

const MembershipForm = () => {
	const classes = useStyles();
	const gender = ['Male', 'Female'];
	const ageRange = ['18 - 35', '36 - 45', '46 and above'];
	const clans = [
		'Osata',
		'Wogwu',
		'Wogbale',
		'Inyafuo',
		'Waatuma',
		'Ogbagere',
		'Uffiacha',
	];
	return (
		<Box>
			<Typography variant='h6'>Membership Form</Typography>
			<Typography className={classes.text} variant='body1'>
				<InfoIcon />
				Caveat: This Membership is strictly meant for Effium indigenes ONLY!
			</Typography>
			<Box
				padding='20px'
				borderRadius='5px'
				border='1px solid rgba(0, 0, 0, 0.2)'
				marginTop='30px'
			>
				<form>
					<Grid container spacing={2}>
						<Grid className={classes.infoText} item xs={12}>
							<Typography variant='body2'>Personal information</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								fullWidth={true}
								id='surname'
								label='surname'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								fullWidth={true}
								id='firstName'
								label='firstName'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								fullWidth={true}
								id='otherName'
								label='otherName'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomSelect
								fullWidth={true}
								label='Gender'
								data={gender}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomSelect
								fullWidth={true}
								label='Age'
								data={ageRange}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomSelect
								fullWidth={true}
								label='Clan'
								data={clans}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='subClan'
								label='Specify sub clan'
								variant='outlined'
							/>
						</Grid>
						<Grid
							style={{ marginTop: '20px' }}
							className={classes.infoText}
							item
							xs={12}
						>
							<Typography variant='body2'>Contact</Typography>
						</Grid>

						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='email'
								label='Email address'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} container>
							<Grid style={{ paddingRight: '8px' }} item xs={4} sm={3}>
								<Autocomplete
									style={{ width: '100%', padding: '0px', marginRight: '10px' }}
									options={country}
									autoHighlight
									getOptionLabel={(option) => `${option.dialCode}`}
									renderOption={(option) => (
										<Box display='flex' alignItems='center'>
											<img
												style={{ width: '20px', marginRight: '5px' }}
												src={option.flag}
												alt={option.name}
											/>{' '}
											<Typography variant='body2'>{option.dialCode}</Typography>
										</Box>
									)}
									renderInput={(params) => (
										<TextField
											fullWidth={true}
											variant='outlined'
											{...params}
											className={classes.input}
											label={'Dail code'}
											inputProps={{
												...params.inputProps,
											}}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={8} sm={9}>
								<CustomTextField
									fullWidth={true}
									id='phone'
									label='Phone number'
									variant='outlined'
								/>
							</Grid>
						</Grid>
						<Grid
							style={{ marginTop: '20px' }}
							className={classes.infoText}
							item
							xs={12}
						>
							<Typography variant='body2'>Address</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='residential-address'
								label='Residential address'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='location'
								label='Location'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='lga'
								label='Local Government Area'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='state-province'
								label='State/Province'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='country'
								label='Country'
								variant='outlined'
							/>
						</Grid>
					</Grid>
					<Box marginTop='10px'>
						<Button className={classes.btn}>Submit</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export default MembershipForm;
