import {
	btn,
	container,
	grayColor,
	infoColor,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	container: {
		...container,
		backgroundColor: grayColor[8],
		minHeight: '40vh',
	},
	content: {
		...container,
		paddingTop: '20px',
		paddingBottom: '20px',
		'@media (min-width: 600px)': {
			paddingBottom: '0px',
			paddingTop: '0px',
		},
	},
	textHeader: {
		color: grayColor[6],
		margin: '20px 0px',
		fontSize: '24px',
		'@media (min-width: 600px)': {
			fontSize: '36px',
			marginBottom: '0px',
		},
	},
	gridItem: {
		display: 'flex',
		order: '2',
		flexDirection: 'column',
		justifyContent: 'center',
		position: 'relative',
		height: '100%',
		'@media (min-width: 600px)': {
			order: '0',
		},
	},
	gridItemImage: {
		maxWidth: '100%',
		'@media (min-width: 600px)': {
			maxWidth: '400px',
		},
	},
	readMoreBtn: {
		...btn,
		color: grayColor[7],
		borderRadius: '50%',
		border: `1px solid ${grayColor[7]}`,
		marginTop: '20px',
		height: '50px',
		width: '50px',
		'&:hover': {
			backgroundColor: infoColor[4],
			border: `1px solid ${infoColor[4]}`,
			color: grayColor[8],
		},
	},
});

export default styles;
