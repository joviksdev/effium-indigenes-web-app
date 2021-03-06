import {
	transition,
	grayColor,
	btn,
	whiteColor,
	blueColor,
	infoColor,
	dangerColor,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	subHeaderText: {
		fontWeight: 'bold',
		color: infoColor[4],
	},
	membershipContainer: {
		maxWidth: '768px',
		margin: '10px auto',
	},
	text: {
		display: 'flex',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			fontSize: '18px',
			marginRight: '5px',
		},
	},
	infoText: {
		padding: '0px 8px !important',
	},
	input: {
		...transition,
		'& .MuiInput-underline:after': {
			borderBottom: `2px solid ${grayColor[6]}`,
		},
		'& .MuiInputLabel-root.Mui-focused': {
			color: `${infoColor[4]} !important`,
		},

		'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
			border: `1px solid ${grayColor[3]}`,
		},

		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: `2px solid ${infoColor[4]}`,
		},

		'& .MuiOutlinedInput-input': {
			padding: '10px',
			display: 'flex',
			alignItem: 'center',
		},
		'& .MuiInputLabel-formControl': {
			fontSize: '14px !important',
			top: '0px',
		},
		'& .MuiInputLabel-outlined': {
			transform: 'translate(14px, 13px) scale(1)',
		},
		'& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
			transform: 'translate(14px, -5px) scale(0.75)',
		},
		'&  .MuiInputLabel-formControl.Mui-focused': {
			top: '0px !important',
		},
		'& .MuiAutocomplete-input': {
			padding: '1px !important',
		},
		'& .MuiAutocomplete-inputRoot': {
			paddingRight: '0px !important',
		},
		'& .MuiAutocomplete-endAdornment ': {
			right: '3px !important',
		},
		'& .MuiAutocomplete-clearIndicator': {
			display: 'none',
		},
	},
	infoIcon: {
		color: infoColor[4],
		fontSize: '18px',
		marginRight: '5px',
	},
	btn: {
		...btn,
		color: whiteColor,
		backgroundColor: infoColor[4],
		'&:hover': {
			opacity: '0.8',
			backgroundColor: infoColor[4],
		},
	},
	errorText: {
		color: dangerColor[0],
		fontWeight: 'initial',
	},
});

export default styles;
