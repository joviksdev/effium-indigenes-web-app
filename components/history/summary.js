import React from 'react';
import styles from './styles';
import img from '../../assets/images/festive.jpeg';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

// Material-ui/Icon
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const Summary = () => {
	const classes = useStyles();
	return (
		<Box paddingTop='20px' paddingBottom='20px'>
			<Box className={classes.content}>
				<Grid alignItems='center' container>
					<Grid
						style={{ position: 'relative', height: '100%' }}
						className={classes.gridItem}
						item
						xs={12}
						sm={6}
					>
						<Box>
							<Typography className={classes.textHeader}>
								Our History
							</Typography>
							<Typography className='text-summarry' variant='body1'>
								With our rich history, diverse neighborhoods, and legacy of
								arts, culture, and education, City has something for everyone.
							</Typography>

							<Tooltip title='Read more' placement='right'>
								<Button className={classes.readMoreBtn}>
									<ArrowRightAltIcon />
								</Button>
							</Tooltip>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box
							className={classes.gridItemImage}
							margin='auto'
							maxWidth='400px'
						>
							<img style={{ width: '100%' }} src={img} alt='about-us' />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Summary;
