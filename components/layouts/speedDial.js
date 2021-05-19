import React, { useState } from 'react';
import styles from './styles';
import cx from 'classnames';

// Material-ui/Core
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Material-ui/Icon
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(styles);

const speadDial = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const rotate = cx(classes.speedDialBtn, { [classes.rotate]: open });

	return (
		<Box>
			<Backdrop open={open} />
			<Box className={classes.speedDial}>
				<Button className={rotate} onClick={handleOpen}>
					<AddIcon />
				</Button>
			</Box>
		</Box>
	);
};

export default speadDial;
