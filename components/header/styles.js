import {
	blackColor,
	btn,
	container,
	grayColor,
	infoColor,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	appBar: {
		width: '100%',
		backgroundColor: blackColor,
		color: grayColor[4],
		boxShadow: 'none',
		'& .MuiToolbar-root': {
			display: 'block',
		},
	},
	contactHeader: {
		...container,
		paddingTop: '20px',
		paddingBottom: '20px',
	},
	appHeaderText: {
		fontSize: '22px',
		color: grayColor[4],
		fontFamily: '"Yeseva One", "Roboto", serif',
		'@media (min-width: 600px)': {
			fontSize: '26px',
		},
	},
	headerText: {
		fontSize: '20px',
		marginBottom: '15px',
		'@media (min-width:600px)': {
			fontSize: '40px',
		},
	},
	container: {
		...container,
		padding: '10px 0px',
		'@media (min-width:600px)': {
			paddingTop: '0p',
		},
	},
	list: {
		display: 'flex',
		'& .MuiListItem-root ': {
			padding: '5px',
			width: 'initial !important',
			borderRadius: '50%',
		},
	},
	btn: {
		...btn,
		color: grayColor[4],
	},
	loginBtn: {
		color: grayColor[4],
		display: 'flex',
		alignItems: 'center',
		'& .MuiTypography-root': {
			marginLeft: '5px',
		},
	},
	breadCrumbs: {
		'& a': {
			color: grayColor[4],
		},
		'& .MuiBreadcrumbs-separator': {
			color: grayColor[4],
		},
	},
	active: {
		color: `${infoColor[4]} !important`,
	},
});

export default styles;
