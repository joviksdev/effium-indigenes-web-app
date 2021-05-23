import React from 'react';
import Link from 'next/link';
import styles from './styles';
import img from '../../assets/images/hands.jpg';
import { grayColor, blackColor } from '../../assets/js/componentsStyles';

// MAterial-ui/core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Material-ui/Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const Memebership = () => {
	const classes = useStyles();
	return (
		<Box position='relative'>
			<Box
				// minHeight='60vh'
				position='relative'
				bgcolor={blackColor}
				color={grayColor[4]}
				className={classes.wrapper}
				style={{
					background: `linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), url('${img}') no-repeat `,
					backgroundColor: 'black',
					backgroundSize: '100%',
					backgroundPosition: 'center ',
				}}
			>
				<Box height='100%' className={classes.membershipContainer}>
					<Box>
						<Box maxWidth='560px'>
							<Typography variant='h1' className={classes.headerText}>
								Be a part of something beautify
							</Typography>
							<Typography className={classes.text} variant='body1'>
								Connecting with community members is first about building
								relationships. It is the most important part of creating change.
							</Typography>
							<Link href='/membership'>
								<a className={classes.link}>
									Become a member <ArrowRightAltIcon />
								</a>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className={classes.positioning} position='relative' width='100%'>
				<Box
					className={classes.membershipInfoContainer}
					display='grid'
					gridGap='20px'
				>
					<Card
						className={classes.card}
						data-aos='zoom-in'
						data-aos-delay='0'
						data-aos-duration='800'
						data-aos-easing='ease-in-out'
						data-aos-mirror='true'
						data-aos-once='true'
					>
						<CardContent>
							<Typography className={classes.cardTitle} variant='h6'>
								Free Registration
							</Typography>
							<Typography variant='body2'>
								No Payment required, register now and build relationship one at
								a time
							</Typography>
						</CardContent>
					</Card>
					<Card
						className={classes.card}
						data-aos='zoom-in'
						data-aos-delay='100'
						data-aos-duration='800'
						data-aos-easing='ease-in-out'
						data-aos-mirror='true'
						data-aos-once='true'
					>
						<CardContent>
							<Typography className={classes.cardTitle} variant='h6'>
								Friendly Community
							</Typography>
							<Typography variant='body2'>
								Be part of a community where you have the opportunity to meet
								other people who share common goals and relate friendly with
								each other.
							</Typography>
						</CardContent>
					</Card>
					<Card
						className={classes.card}
						data-aos='zoom-in'
						data-aos-delay='200'
						data-aos-duration='800'
						data-aos-easing='ease-in-out'
						data-aos-mirror='true'
						data-aos-once='true'
					>
						<CardContent>
							<Typography className={classes.cardTitle} variant='h6'>
								Community support
							</Typography>
							<Typography variant='body2'>
								Benifit from varieties of support the community provide to her
								members.
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Box>
		</Box>
	);
};

export default Memebership;
