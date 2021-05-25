import React, { useEffect } from 'react';

// Material UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = makeStyles({
	main: {
		width: '100%',
		right: '0px',
		top: '20px',
		'@media (min-width: 960px)': {
			width: 'calc(100% - 280px)',
		},
	},
	container: {
		width: '90%',
		'@media (min-width:768px)': {
			width: '700px',
		},
	},
});

const ToastAlert = ({ style, msg, type, closeAlert }) => {
	useEffect(() => {
		if (msg) {
			setTimeout(() => {
				closeAlert();
			}, 10000);
		}
	});

	const classes = styles();

	return (
		<Box
			style={style}
			className={classes.main}
			zIndex='12000'
			display='flex'
			justifyContent='center'
		>
			<Box zIndex='10000' className={classes.container}>
				<Alert
					variant='filled'
					severity={type}
					action={
						<IconButton
							color='inherit'
							size='small'
							onClick={() => {
								closeAlert();
							}}
						>
							<CloseIcon fontSize='inherit' />
						</IconButton>
					}
				>
					{msg}
				</Alert>
			</Box>
		</Box>
	);
};

export default ToastAlert;
