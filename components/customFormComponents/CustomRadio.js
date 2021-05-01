import React from 'react';
import styles from './styles';

// Material-UI/Core
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles(styles);

const CustomCheckbox = (props) => {
	const classes = useStyles();
	const { label, style, value } = props;
	return (
		<Box style={style}>
			<FormControlLabel
				className={classes.radio}
				value={value}
				control={<Radio />}
				label={label}
			/>
		</Box>
	);
};

export default CustomCheckbox;
