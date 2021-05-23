import {
	container,
	grayColor,
	infoColor,
	transition,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	wrapper: {
		padding: '15px 0',
		'@media (min-width: 600px)': {
			padding: '30px',
		},
	},
	container: {
		...container,
	},
	textHeader: {
		marginBottom: '15px',
		color: grayColor[6],
	},
	subTitle: {},
	smallTextHeader: {
		fontSize: '16px',
		color: grayColor[7],
		'& small': {
			fontSize: '11px',
			marginLeft: '15px',
		},
		'& small': {
			fontSize: '11px',
			color: grayColor[0],
			fontWeight: '200',
		},
	},
	gridItemMore: {
		marginTop: '20px',
	},
	gridItemHighLight: {
		flexDirection: 'column',
		'@media (min-width: 600px)': {
			flexDirection: 'row',
		},
	},
	link: {
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
	timeline: {
		marginBottom: '0px',
		'& .MuiTimelineItem-missingOppositeContent:before': {
			display: 'none',
		},
	},
	imageWrapper: {
		width: '100%',

		'@media (min-width: 600px)': {
			maxWidth: '280px',
			marginRight: '15px',
		},
		'@media (min-width: 960px)': {
			marginRight: '25px',
		},
	},
});

export default styles;
