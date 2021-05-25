import {
	container,
	grayColor,
	infoColor,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	container: {
		...container,
		paddingTop: '20px',
		paddingBottom: '20px',
	},
	headerText: {
		marginBottom: '10px',
	},
	containerContent: {
		display: 'grid',
		gridGap: '15px',
		gridTemplateColumns: '1fr',
		'@media (min-width: 960px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
	},
	flexGrid: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		'@media (min-width: 960px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
			gridGap: '10px',
		},
	},
	submitBtn: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: grayColor[8],
		backgroundColor: grayColor[7],
		border: `1px solid ${grayColor[7]}`,
		'@media (min-width: 768px)': {
			width: 'initial',
		},
		'&:hover': {
			backgroundColor: infoColor[4],
			border: `1px solid ${infoColor[4]}`,
		},
	},
	list: {
		'& .MuiListItem-root': {
			padding: '8px',
			marginBottom: '10px',
			alignItems: 'center',
		},
		'& .MuiListItem-root:last-child': {
			marginBottom: '0px',
		},
		'& .MuiSvgIcon-root': {
			marginRight: '10px',
		},
	},
	locationMap: {
		'& > div': {
			width: '90% !important',
		},
	},
	mapWrapper: {
		margin: '20px 0px',
		width: '100% !important',

		'@media(min-width: 768px)': {
			margin: '40px 0px',
		},
	},
	map: {
		height: '300px',
		'& .mapquest-logo, .leaflet-bottom': {
			display: 'none',
		},
		'@media (min-width: 768px)': {
			height: '400px',
		},
	},
	link: {
		display: 'flex',
		alignItems: 'center',
	},
});

export default styles;
