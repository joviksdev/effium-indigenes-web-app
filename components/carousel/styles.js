import {
	btn,
	whiteColor,
	blackColor,
	container,
	infoColor,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	carouselContainer: {
		...container,
		paddingTop: '40px',
		paddingBottom: '40px',
		'&:hover': {
			'& .MuiButton-root': {
				opacity: '1',
			},
		},
	},
	carouselFlex: {
		flexDirection: 'column',
		'@media (min-width: 768px)': {
			flexDirection: 'row',
		},
	},
	carouselContent: {
		width: '100%',
		position: 'relative',
		'@media (min-width: 768px)': {
			marginLeft: '40px',
		},
	},
	readMore: {},
	btn: {
		...btn,
		color: whiteColor,
		position: 'absolute',
		opacity: '0.2',
		top: '50%',
		transform: 'translateY(-50%)',
		backgroundColor: infoColor[4],
		borderRadius: '50%',
		height: '50px',
		width: '50px',
		'&:hover': {
			backgroundColor: infoColor[4],
		},
	},
	leftBtn: {
		left: '15px',
	},
	rightBtn: {
		right: '15px',
	},
});

export default styles;
