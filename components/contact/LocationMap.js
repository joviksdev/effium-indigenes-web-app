import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './styles';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

const LocationMap = () => {
	const classes = useStyles();
	useEffect(() => {
		L.mapquest.key = process.env.NEXT_PUBLIC_MAPQUEST_API_KEY;
		var map = L.mapquest.map('map', {
			center: [6.63105, 8.05814],
			layers: L.mapquest.tileLayer('map'),
			zoom: 12,
		});

		map.addControl(L.mapquest.control());
	}, []);
	return (
		<Box marginBottom='20px' className={classes.mapWrapper}>
			<Typography className={classes.headerText} variant='h6'>
				Geo Location
			</Typography>
			<Box className={classes.map} id='map' width='100%'></Box>
		</Box>
	);
};

export default LocationMap;
