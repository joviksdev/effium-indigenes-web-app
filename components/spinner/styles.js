import { whiteColor } from '../../assets/js/componentsStyles';

const styles = () => ({
	circularProgress: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiCircularProgress-svg': {
			width: '25px',
			height: '25px',
			color: whiteColor,
		},
	},
});

export default styles;
