import {
	blackColor,
	btn,
	transition,
	infoColor,
	grayColor,
	whiteColor,
	container,
} from '../../assets/js/componentsStyles';
const styles = () => ({
	wrapper: {
		padding: '15px 0',
		'@media (min-width: 600px)': {
			padding: '40px 0px',
		},
	},
	container: {
		...container,
	},
	textHeader: {
		...container,
		marginBottom: '10px',
		color: grayColor[6],
	},
	displayWrapper: {
		width: '100%',
		height: '100vh',
		overflowY: 'auto',
		top: '0',
		left: '0',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		zIndex: '2000',
	},
	imgWrapper: {
		...transition,
		overflow: 'hidden',
		position: 'relative',
		'&:hover': {
			'& img': {
				transform: 'scale(1.2) rotate(10deg)',
			},
		},
		'&:before': {
			...transition,
			opacity: '0',
			content: '""',
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			zIndex: '5',
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
		},
		'&:hover:before': {
			opacity: '0.6',
		},
		'&:hover .MuiButton-root': {
			opacity: '1',
			transform: 'translateY(50%)',
		},
		'& img': {
			...transition,
			transform: 'scale(1)',
		},
	},
	lightboxImg: {
		width: '80%',
		'@media (min-width:600px)': {
			width: '480px',
		},
	},
	viewBtn: {
		...btn,
		...transition,
		color: grayColor[6],
		backgroundColor: whiteColor,
		zIndex: '400',
		position: 'absolute',
		opacity: '0',
		zIndex: '10',
		bottom: '50%',
		transform: 'translateY(-50%)',
		height: '30px',
		width: '30px',
		borderRadius: '50%',
		'& .MuiSvgIcon-root': {
			fontSize: '18px',
		},
		'&:hover': {
			backgroundColor: whiteColor,
			opacity: '0.8',
		},
		'@media (min-width: 600px)': {
			height: '60px',
			width: '60px',
		},
	},
	btn: {
		...btn,
		color: blackColor,
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		backgroundColor: whiteColor,
		borderRadius: '50%',
		height: '35px',
		width: '35px',
		'&:hover': {
			backgroundColor: whiteColor,
			opacity: '0.8',
		},
		'@media (min-width: 600px)': {
			height: '50px',
			width: '50px',
		},
	},
	leftBtn: {
		left: '15px',
	},
	rightBtn: {
		right: '15px',
	},

	closeBtn: {
		position: 'absolute',
		zIndex: '2000',
		top: '0px',
		right: '0px',
		'& .MuiButton-root': {
			...btn,
			borderRadius: '50%',
			height: '40px',
			width: '40px',
			color: whiteColor,
		},
		'@media (min-width: 600px)': {
			right: '15px',
			top: '15px',
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
});

export default styles;
