import {
	btn,
	container,
	infoColor,
	grayColor,
	whiteColor,
	transition,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	layout: {
		height: '100vh',
	},
	content: {
		...container,
		display: 'flex',
		justifyContent: 'flex-end',
		height: '100%',
	},
	sidebar: {
		position: 'fixed',
		justifyContent: 'flex-end',
		width: '100%',
	},
	sidebarContent: {
		...container,
	},
	card: {
		width: '90%',
		hight: '100Vh',
		margin: '10px 0px',
	},
	list: {
		'& .MuiListItem-root': {
			marginBottom: '10px',
		},
		'& .MuiListItem-root:last-child': {
			marginBottom: '0px',
		},
	},
	speedDial: {},
	speedDialBtn: {
		...btn,
		...transition,
		position: 'absolute',
		right: '20px',
		bottom: '50px',
		height: '40px',
		width: '40px',
		borderRadius: '50%',
		color: grayColor[8],
		backgroundColor: infoColor[4],
		'& .MuiSvgIcon-root': {},
		'&:hover': {
			backgroundColor: infoColor[4],
		},
	},
	rotate: {
		transform: 'rotate(90deg)',
	},
});

export default styles;
