import { container, transition } from '../../assets/js/componentsStyles';

const styles = () => ({
	container: {
		...container,
	},
	menu: {
		display: 'flex',
		justifyContent: 'center',
		'& .MuiMenuItem-root': {
			margin: '0px 5px',
			padding: '8px',
			borderRadius: '5px',
			textTransform: 'capitalize',
		},
		'@media (min-width: 960px)': {
			'& .MuiMenuItem-root': {
				margin: '0px 10px',
				padding: '8px 15px',
			},
		},
		'& .MuiSvgIcon-root': {
			...transition,
			fontSize: '18px',
		},
	},
	list: {
		minWidth: '200px',
		zIndex: '10000',
		'& .MuiSvgIcon-root': {
			color: 'inherit',
			fontSize: '18px',
			marginRight: '10px',
		},
	},
	expandMoreIcon: {
		transform: 'rotate(180deg)',
	},
});

export default styles;
