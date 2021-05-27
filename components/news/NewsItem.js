import React from 'react';
import Image from 'next/image';
import img from '../../assets/images/c2.jpg';
import styles from './styles';

// Material-Ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const NewsItem = () => {
	const classes = useStyles();
	return (
		<Box display='flex' className={classes.newsItem}>
			<Box>
				<Image
					layout='intrinsic'
					src={img}
					alt='new'
					width={180}
					height={130}
				/>
			</Box>
			<Box width='100%' marginLeft='15px'>
				<Typography variant='h6'>Title</Typography>
				<Typography color='textSecondary' variant='body2'>
					{new Date().toDateString()}
				</Typography>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					placeat qui consequatur illum dicta reiciendis quos accusamus eius!
					Vitae, facere?
				</Typography>
			</Box>
		</Box>
	);
};

export default NewsItem;
