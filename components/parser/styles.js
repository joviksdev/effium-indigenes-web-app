import {
	container,
	transition,
	infoColor,
	whiteColor,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	wrapper: {
		position: 'relative',
		height: '360px',
	},
	membershipInfoContainer: {
		...container,
		maxWidth: '800px',
		paddingTop: '8px',
		paddingBottom: '8px',
		gridTemplateColumns: 'repeat(1, 1fr)',
		'@media (min-width: 600px)': {
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
	},
	membershipContainer: {
		...container,
		'& > div': {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
		},
		'@media (min-width: 600px)': {
			'& > div': {
				display: 'block',
				marginTop: '40px !important',
			},
		},
	},
	positioning: {
		margin: '20px 0px',
		'@media (min-width: 600px)': {
			margin: '0px',
			top: '-50px',
		},
	},
	card: {
		...transition,
		cursor: 'pointer',
	},
	headerText: {
		fontSize: '28px',
		marginBottom: '20px',
		color: infoColor[4],
		'@media (min-width:600px)': {
			fontSize: '40px',
		},
	},
	link: {
		zIndex: '1000',
		marginTop: '10px',
		display: 'inline-block',
		textTransform: 'uppercase',
		'& .MuiSvgIcon-root': {
			...transition,
			color: infoColor[4],
			verticalAlign: 'middle',
		},
		'&:hover': {
			color: infoColor[4],
		},
		'&:hover .MuiSvgIcon-root': {
			transform: 'translateX(5px)',
		},
	},
});

export default styles;
