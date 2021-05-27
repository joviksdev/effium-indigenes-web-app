import React, { useState, useContext } from 'react';
import AppContext from '../../context/app/appContext';
import styles from './styles';
import CustomTextField from '../customFormComponents/TextField';
import countryData from '../../assets/data/country.json';
import TextField from '@material-ui/core/TextField';
import CustomSelect from '../customFormComponents/CustomSelect';
import CustomCheckbox from '../customFormComponents/CustomCheckbox';

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
	const appContext = useContext(AppContext);
	const { registerMember } = appContext;
	const genderArr = ['Select gender', 'Male', 'Female'];
	const ageRange = ['Select age', '18 - 35', '36 - 45', '46 and above'];
	const clans = [
		'Select clan',
		'Osata',
		'Wogwu',
		'Wogbale',
		'Inyafuo',
		'Waatuma',
		'Ogbagere',
		'Uffiacha',
	];

	// Form State
	const [membershipDetails, setMembershipDetails] = useState({
		surname: '',
		firstName: '',
		otherName: '',
		gender: 'Select gender',
		age: 'Select age',
		clan: 'Select clan',
		subClan: '',
		email: '',
		phone: '',
		dailingCode: '',
		address: '',
		location: '',
		lga: '',
		state_province: '',
		country: '',
		isChecked: false,
	});

	const {
		surname,
		firstName,
		otherName,
		gender,
		age,
		clan,
		subClan,
		email,
		phone,
		dailingCode,
		address,
		location,
		lga,
		state_province,
		country,
		isChecked,
	} = membershipDetails;

	// Verification State
	const [isSurnameErr, setIsSurnameErr] = useState(false);
	const [isFirstNameErr, setIsFirstNameErr] = useState(false);
	const [isOtherNameErr, setIsOtherNameErr] = useState(false);
	const [isGenderErr, setIsGenderErr] = useState(false);
	const [isAgeErr, setIsAgeErr] = useState(false);
	const [isClanErr, setIsClanErr] = useState(false);
	const [isSubClanErr, setIsSubClanErr] = useState(false);
	const [isDailingCodeErr, setIsDailingCodeErr] = useState(false);
	const [isPhoneErr, setIsPhoneErr] = useState(false);
	const [isAddressErr, setIsAddressErr] = useState(false);
	const [isStateErr, setIsStateErr] = useState(false);
	const [isCountryErr, setIsCountryErr] = useState(false);
	const [isCheckedErr, setIsCheckedErr] = useState(false);

	// Handle Submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (surname === '') {
			setIsSurnameErr(true);
		} else {
			setIsSurnameErr(false);
		}
		if (firstName === '') {
			setIsFirstNameErr(true);
		} else {
			setIsFirstNameErr(false);
		}
		if (otherName === '') {
			setIsOtherNameErr(true);
		} else {
			setIsOtherNameErr(false);
		}
		if (gender === 'Select gender') {
			setIsGenderErr(true);
		} else {
			setIsGenderErr(false);
		}
		if (age === 'Select age') {
			setIsAgeErr(true);
		} else {
			setIsAgeErr(false);
		}
		if (clan === 'Select clan') {
			setIsClanErr(true);
		} else {
			setIsClanErr(false);
		}
		if (subClan === '') {
			setIsSubClanErr(true);
		} else {
			setIsSubClanErr(false);
		}
		if (phone === '') {
			setIsPhoneErr(true);
		} else {
			setIsPhoneErr(false);
		}
		if (dailingCode === '') {
			setIsDailingCodeErr(true);
		} else {
			setIsDailingCodeErr(false);
		}
		if (address === '') {
			setIsAddressErr(true);
		} else {
			setIsAddressErr(false);
		}
		if (state_province === '') {
			setIsStateErr(true);
		} else {
			setIsStateErr(false);
		}
		if (country === '') {
			setIsCountryErr(true);
		} else {
			setIsCountryErr(false);
		}
		if (isChecked === false) {
			setIsCheckedErr(true);
		} else {
			setIsCheckedErr(false);
		}

		// Submit Form
		if (
			surname !== '' &&
			firstName !== '' &&
			gender !== 'Select gender' &&
			age !== 'Select age' &&
			clan !== 'Select clan' &&
			subClan !== '' &&
			phone !== '' &&
			dailingCode !== '' &&
			address !== '' &&
			state_province !== '' &&
			country !== '' &&
			isChecked !== false
		) {
			const res = registerMember(membershipDetails);
			if (res.success) {
			}
		}
	};

	return (
		<Box className={classes.membershipContainer}>
			<Typography variant='h6'>Membership Form</Typography>
			<Box marginTop='10px'>
				<Box display='flex' alignItems='center'>
					<InfoIcon className={classes.infoIcon} />{' '}
					<Typography style={{ lineHeight: 'initial' }} variant='body1'>
						Caveat
					</Typography>
				</Box>
				<Typography className={classes.text} variant='body2'>
					This Membership is strictly meant for Effium indigenes ONLY!
				</Typography>
			</Box>
			<Box
				padding='20px'
				borderRadius='5px'
				border='1px solid rgba(0, 0, 0, 0.2)'
				marginTop='30px'
			>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid className={classes.infoText} item xs={12}>
							<Typography className={classes.subHeaderText} variant='body2'>
								Personal information
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								fullWidth={true}
								isError={isSurnameErr}
								label={isSurnameErr ? 'Surname is required' : 'Surname'}
								id='surname'
								name='surname'
								value={surname}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										surname: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								fullWidth={true}
								id='firstName'
								isError={isFirstNameErr}
								label={isFirstNameErr ? 'First name is required' : 'First name'}
								value={firstName}
								name='firstName'
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										firstName: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								fullWidth={true}
								id='otherName'
								name='otherName'
								value={otherName}
								isError={isOtherNameErr}
								label={isOtherNameErr ? 'Other name is required' : 'Other'}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										otherName: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomSelect
								fullWidth={true}
								isError={isGenderErr}
								label={isGenderErr ? 'Select gender' : 'Gender'}
								value={gender}
								name='gender'
								data={genderArr}
								variant='outlined'
								onChange={(value) => {
									setMembershipDetails({ ...membershipDetails, gender: value });
								}}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomSelect
								fullWidth={true}
								isError={isAgeErr}
								label={isAgeErr ? 'Select age range' : 'Age'}
								value={age}
								data={ageRange}
								variant='outlined'
								onChange={(value) => {
									setMembershipDetails({ ...membershipDetails, age: value });
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomSelect
								fullWidth={true}
								isError={isClanErr}
								label={isClanErr ? 'Select Clan' : 'Clan'}
								value={clan}
								data={clans}
								variant='outlined'
								onChange={(value) => {
									setMembershipDetails({ ...membershipDetails, clan: value });
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='subClan'
								value={subClan}
								isError={isSubClanErr}
								label={isSubClanErr ? 'Specify sub clan' : 'Sub clan'}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										subClan: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid
							style={{ marginTop: '20px' }}
							className={classes.infoText}
							item
							xs={12}
						>
							<Typography className={classes.subHeaderText} variant='body2'>
								Contact
							</Typography>
						</Grid>

						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='email'
								value={email}
								label='Email address'
								label={'Email'}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										email: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} container>
							<Grid style={{ paddingRight: '8px' }} item xs={4} sm={3}>
								<Autocomplete
									style={{ width: '100%', padding: '0px', marginRight: '10px' }}
									options={countryData}
									autoHighlight
									onChange={(event, value) =>
										setMembershipDetails({
											...membershipDetails,
											dailingCode: value.dialCode,
										})
									}
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
											error={isDailingCodeErr}
											label={isDailingCodeErr ? 'Select code' : 'code'}
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
									isError={isPhoneErr}
									label={
										isPhoneErr ? 'Phone number is required' : 'Phone number'
									}
									value={phone}
									variant='outlined'
									onChange={(e) => {
										setMembershipDetails({
											...membershipDetails,
											phone: e.target.value,
										});
									}}
								/>
							</Grid>
						</Grid>
						<Grid
							style={{ marginTop: '20px' }}
							className={classes.infoText}
							item
							xs={12}
						>
							<Typography className={classes.subHeaderText} variant='body2'>
								Address
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='residential-address'
								isError={isAddressErr}
								label={
									isAddressErr
										? 'Residential address is required'
										: 'Residential address'
								}
								value={address}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										address: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='location'
								label='Location'
								value={location}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										location: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='lga'
								label='Local Government Area'
								value={lga}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										lga: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
								fullWidth={true}
								id='state-province'
								value={state_province}
								isError={isStateErr}
								label={
									isStateErr ? 'State/Province is required' : 'State/Province'
								}
								variant='outlined'
								onChange={(e) => {
									setMembershipDetails({
										...membershipDetails,
										state_province: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Autocomplete
								style={{ width: '100%', padding: '0px', marginRight: '10px' }}
								options={countryData}
								autoHighlight
								onChange={(event, value) =>
									setMembershipDetails({
										...membershipDetails,
										country: value.name,
									})
								}
								getOptionLabel={(option) => `${option.name}`}
								renderOption={(option) => (
									<Box display='flex' alignItems='center'>
										<Typography variant='body2'>{option.name}</Typography>
									</Box>
								)}
								renderInput={(params) => (
									<TextField
										fullWidth={true}
										variant='outlined'
										{...params}
										className={classes.input}
										error={isCountryErr}
										label={isCountryErr ? 'Select country' : 'country'}
										inputProps={{
											...params.inputProps,
										}}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} md={12}>
							<CustomCheckbox
								checked={isChecked}
								onChange={(e) =>
									setMembershipDetails({
										...membershipDetails,
										isChecked: !isChecked,
									})
								}
								label='Attestation'
								label={
									isCheckedErr ? (
										<span className={classes.errorText}>*Select check box</span>
									) : (
										'Attestation'
									)
								}
							/>
							<Typography variant='body2'>
								I hereby attest that I am an indigene of Effium tribe in Ohaukwu
								Local Government Area of Ebonyi State, Nigeria. All information
								supplied by me in this form are true to the best of my
								knowledge. I take full responsibility for any error, or false
								information- knowingly or unknowingly submitted here in my name.
							</Typography>
						</Grid>
					</Grid>
					<Box marginTop='10px'>
						<Button type='submit' className={classes.btn}>
							Submit
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export default MembershipForm;
