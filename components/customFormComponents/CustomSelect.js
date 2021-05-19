import React from 'react';
import styles from './styles';

// Material-ui/Core
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const CustomSelect = ({ data, label, variant, fullWidth }) => {
	const classes = useStyles();
	return (
		<Box>
			<Autocomplete
				style={{ width: '100%', padding: '0px', marginRight: '10px' }}
				options={data}
				autoHighlight
				getOptionLabel={(option) => `${option}`}
				renderOption={(option) => <>{option}</>}
				renderInput={(params) => (
					<TextField
						variant={variant}
						{...params}
						fullWidth={fullWidth}
						className={classes.input}
						label={label}
						inputProps={{
							...params.inputProps,
						}}
					/>
				)}
			/>
		</Box>
	);
};

export default CustomSelect;
