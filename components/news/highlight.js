import React from 'react';
import Image from 'next/image';
import styles from './styles';
import img from '../../assets/images/c1.jpg';
import Link from 'next/link';
import Timeline from './timeline';

// Material-Ui/Core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Material-ui/Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const NewsHighlight = () => {
	const classes = useStyles();
	return (
		<Box bgcolor='white' className={classes.wrapper}>
			<Box className={classes.container}>
				<Typography
					style={{ marginBottom: '20px' }}
					className={classes.textHeader}
					variant='h5'
				>
					News
				</Typography>
				<Box>
					<Grid container>
						<Grid
							data-aos='fade-up'
							data-aos-offset='200'
							data-aos-duration='1000'
							data-aos-easing='ease-in-out'
							data-aos-mirror='true'
							data-aos-once='true'
							xs={12}
							md={8}
							item
						>
							<Box display='flex' className={classes.gridItemHighLight}>
								<Box className={classes.imageWrapper}>
									<Image
										width='400px'
										height='300px'
										src={img}
										alt='news-preview'
									/>
								</Box>
								<Box>
									<Box marginBottom='20px'>
										<Typography variant='body2' color='textSecondary'>
											{new Date().toDateString()}
										</Typography>
										<Typography className={classes.subTitle} variant='h6'>
											EFFIUM CRISIS
										</Typography>
										<Typography variant='body2'>
											Who shaked the jar: A personal confesion of Godwin Nwankwo
											(aka Nkwor Motors) from his ghana exile.
										</Typography>
									</Box>

									<Typography paragraph variant='body1'>
										Recall that in my official publication on "Effium Crisis:
										Who is to be Blamed" one Mr. Godwin Nwankwo (aka Nkwor
										Motors) was hugely indicted for his obvious roles that led
										to the cause of the crisis in Effium...
									</Typography>
									<Link href='/'>
										<a className={classes.link}>
											continue reading <ArrowRightAltIcon />
										</a>
									</Link>
								</Box>
							</Box>
						</Grid>
						<Grid
							className={classes.gridItemMore}
							data-aos='fade-left'
							data-aos-offset='200'
							data-aos-delay='50'
							data-aos-duration='1000'
							data-aos-easing='ease-in-out'
							data-aos-mirror='true'
							data-aos-once='true'
							item
							xs={12}
							md={4}
						>
							<Typography variant='body2'>More news</Typography>
							<Timeline />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default NewsHighlight;
