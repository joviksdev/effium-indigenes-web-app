import React from 'react';
import styles from './styles';

// Material-UI/Core
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const CustomCheckbox = (props) => {
	const classes = useStyles();
	const { label, checked, onChange, name, style, className } = props;
	return (
		<Box className={className} style={style}>
			<FormControlLabel
				className={classes.checkBox}
				control={<Checkbox checked={checked} onChange={onChange} name={name} />}
				label={label}
			/>
		</Box>
	);
};

export default CustomCheckbox;
