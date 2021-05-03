import React from 'react';

// Material-ui/core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Index = () => {
	return (
		<Box padding='8px 15px'>
			<Typography align='center' variant='body2' color='textSecondary'>
				All Right reserve &copy; {new Date().getFullYear()}, Effium Indigenes.
			</Typography>
		</Box>
	);
};

export default Index;
