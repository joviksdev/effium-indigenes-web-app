import React from 'react';
import classNames from 'classnames';
import styles from './styles';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
	const classes = useStyles();
	const {
		id,
		target,
		label,
		isDisabled,
		onChange,
		isError,
		type,
		row,
		name,
		placeholder,
		fullWidth,
		multiline,
		rows,
		variant,
		noBorder,
		backgroundColor,
		endAdornment,
		startAdornment,
		style,
		value,
		helperText,
	} = props;

	const bgClasses = classNames({
		[classes.backgroundColor]: backgroundColor,
	});

	const noBorderStyle = classNames({ [classes.noBorder]: noBorder });

	return (
		<TextField
			ref={target}
			className={`${classes.input} ${bgClasses} ${noBorderStyle}`}
			id={id}
			row={row}
			name={name}
			error={isError}
			disabled={isDisabled}
			label={label}
			style={style}
			fullWidth={fullWidth}
			multiline={multiline}
			rows={rows}
			placeholder={placeholder}
			value={value}
			type={type}
			helperText={helperText && helperText}
			variant={variant}
			onChange={onChange}
			InputProps={{
				startAdornment,
				endAdornment,
			}}
		/>
	);
}

CustomInput.propTypes = {};
