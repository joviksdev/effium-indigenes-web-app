import { btn, whiteColor, blackColor } from '../../assets/js/componentsStyles';

const styles = () => ({
	btn: {
		...btn,
		color: blackColor,
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		backgroundColor: whiteColor,
		borderRadius: '50%',
		height: '50px',
		width: '50px',
		'&:hover': {
			backgroundColor: whiteColor,
			opacity: '0.8',
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
