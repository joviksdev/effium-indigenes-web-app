import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
	const router = useRouter();
	return (
		<Box className={classes.summaryContainer}>
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
							<Typography variant='h4' className={classes.title}>
								History of Effium
							</Typography>
							<Typography
								style={{ lineHeight: '2' }}
								className='text-summarry'
								variant='body1'
							>
								Effium is a distinct tribe of Orrin ethnic group- an Igbo sub
								ethnic nationality that is comprised of the following tribes:
								Effium, Ntezi, Okpoto, Amuda/Idzem, and Okpomolo which are Orrin
								tribes in Ebonyi State, Utonkon/Uffia- an Orrin tribe in Benue
								State and Ukelle- an Orrin tribe in Cross River State among
								others.
							</Typography>

							<Tooltip title='Read more' placement='right'>
								<Button
									onClick={() => router.push('/about')}
									className={classes.readMoreBtn}
								>
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
							<Image
								height='300px'
								width='400px'
								style={{ width: '100%' }}
								src={img}
								alt='about-us'
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Summary;
