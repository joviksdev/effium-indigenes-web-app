import {
	transition,
	whiteColor,
	grayColor,
} from '../../../assets/js/stylesComponents';

const styles = () => ({
	input: {
		...transition,
		'& .MuiInput-underline:after': {
			borderBottom: `2px solid ${grayColor[6]}`,
		},
		'& .MuiInputLabel-root.Mui-focused': {
			color: `${grayColor[6]} !important`,
		},

		'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
			border: `1px solid ${grayColor[3]}`,
		},

		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: `2px solid ${grayColor[6]}`,
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
		'& .MuiOutlinedInput-multiline': {
			padding: '0px !important',
		},
	},
	backgroundColor: {
		'& .MuiInputBase-input': {
			backgroundColor: whiteColor,
			borderRadius: '5px',
		},
	},
	noBorder: {
		'& .MuiInput-underline:before': {
			borderBottom: '0px !important',
		},
		'& .MuiInput-underline:after': {
			borderBottom: `0px !important`,
		},
	},
	checkBox: {
		marginLeft: 'initial',
		marginRight: 'initial',
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
		'& .MuiTypography-body1': {
			fontWeight: 'bold',
			fontSize: '14px',
			color: grayColor[6],
		},
		'& .MuiCheckbox-root': {
			padding: '0px',
		},
		'& .Mui-checked': {
			color: grayColor[6],
		},
	},
	radio: {
		marginLeft: 'initial',
		marginRight: 'initial',
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
		'& .MuiTypography-body1': {
			fontSize: '14px',
			color: grayColor[6],
		},
		'& .MuiCheckbox-root': {
			padding: '0px',
		},
		'& .Mui-checked': {
			color: grayColor[6],
		},
	},
});

export default styles;
