import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './styles';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

const LocationMap = () => {
	const classes = useStyles();
	return (
		<Box className={classes.map}>
			<Typography className={classes.headerText} variant='h6'>
				Geo Location
			</Typography>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
				defaultCenter={{
					lat: 6.63105,
					lng: 8.05814,
				}}
				defaultZoom={12}
			></GoogleMapReact>
		</Box>
	);
};

export default LocationMap;
