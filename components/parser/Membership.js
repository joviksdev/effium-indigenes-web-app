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
							<Typography className={classes.headerText}>
								Be a part of something beautify
							</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium repellat quis dolorem nihil laborum molestiae dicta
								vitae consectetur ducimus voluptatem.
							</Typography>
							<Link href='/'>
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
							<Typography variant='h6'>Free Registration</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
								voluptatem.
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
							<Typography variant='h6'>Friendly Community</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
								voluptatem.
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
							<Typography variant='h6'>Community support</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
								voluptatem.
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Box>
		</Box>
	);
};

export default Memebership;
