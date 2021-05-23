import React from 'react';

// Material-ui/core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Index = () => {
	return (
		<Box padding='8px 15px'>
			<Typography align='center' variant='body2' color='textSecondary'>
				Copyright &copy; {new Date().getFullYear()}, Effium Indigenes. All Right
				reserve.
			</Typography>
		</Box>
	);
};

export default Index;
