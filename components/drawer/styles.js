import { btn, transition, grayColor } from '../../assets/js/componentsStyles';

const styles = () => ({
	drawer: {
		'& .MuiDrawer-paper': {
			width: '80%',
			display: 'flex',
		},
	},
	displayDrawer: {
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		position: 'fixed',
		height: '100vh',
	},
	listWrapper: {
		flex: '1',
		'& .MuiListItem-root': {
			marginBottom: '10px',
			color: grayColor[7],
		},
		'& .MuiListItem-root:last-child': {
			marginBottom: '0px',
		},
		'& .MuiSvgIcon-root': {
			...transition,
			marginRight: '10px',
			fontSize: '20px',
		},
	},
	collapseListItem: {
		marginBottom: '0px !important',
	},
	innerListItem: {
		paddingLeft: '45px !important',
	},
	textHeader: {
		fontSize: '22px',
		fontFamily: '"Yeseva One", "Roboto", serif',
	},
	btn: {
		...btn,
		height: '45px',
		width: '45px',
		borderRadius: '50%',
		float: 'right',
	},
	rotate: {
		transform: 'rotate(90deg)',
	},
});

export default styles;
