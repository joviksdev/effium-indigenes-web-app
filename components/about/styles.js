import {
	container,
	grayColor,
	btn,
	infoColor,
	blueColor,
	whiteColor,
	transition,
} from '../../assets/js/componentsStyles';

const styles = () => ({
	container: {
		...container,
		paddingTop: '20px',
		paddingBottom: '20px',
	},
	text: {
		lineHeight: '1.8',
	},
	entryText: {
		fontSize: '32px',
		lineHeight: 'initial',
		color: infoColor[4],
	},
	summaryContainer: {
		background: '#EFFAFF',
		padding: '40px 0px',
		display: 'flex',
		alignItems: 'center',
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
	headerText: {
		color: grayColor[6],
		margin: '20px 0px',
		fontSize: '24px',
		'@media (min-width: 600px)': {
			fontSize: '36px',
			marginBottom: '0px',
		},
		'& small': {
			fontSize: '10px !important',
		},
	},
	title: {
		margin: '10px 0px 20px',
		color: infoColor[4],
		'@media (min-width: 760px)': {
			margin: '0px 0px 20px',
		},
	},
	subHeaderText: {
		fontSize: '24px',
		'& small': {
			fontSize: '12px',
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
		color: grayColor[6],
		borderRadius: '50%',
		border: `1px solid ${grayColor[6]}`,
		marginTop: '20px',
		height: '50px',
		width: '50px',
		'&:hover': {
			backgroundColor: infoColor[4],
			border: `1px solid ${infoColor[4]}`,
			color: whiteColor,
		},
	},
	moreIcon: {
		color: whiteColor,
		backgroundColor: infoColor[4],
		position: 'fixed',
		bottom: '20px',
		right: '20px',
	},
	list: {
		...transition,
		position: 'fixed',
		transform: 'translateX(200px)',
		bottom: '70px',
		right: '20px',
		'& .MuiListItem-root': {
			backgroundColor: infoColor[4],
			marginBottom: '10px',
			color: whiteColor,
			alignItems: 'right',
			borderRadius: '5px',
		},
	},
	translateList: {
		transform: 'translateX(0px)',
	},
});

export default styles;
