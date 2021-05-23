import React from 'react';
import Image from 'next/image';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './styles';
import carousel from './data';
import Link from '../parser/Link';

// Material-ui/Core
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Material-ui/Icon
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles(styles);

const HomePageCarousel = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = carousel.length;
	const classes = useStyles();

	const theme = useTheme();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	return (
		<Box bgcolor='white'>
			<Box position='relative' className={classes.carouselContainer}>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
					interval={5000}
					resistance={true}
					threshold={20}
				>
					{carousel.map((step, index) => (
						<Box key={index}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Box
									className={classes.carouselFlex}
									position='relative'
									display='flex'
								>
									<Box>
										<Image
											width='400px'
											height='300px'
											src={step.src}
											alt={`corousel-slide-${index}`}
										/>
									</Box>
									<Box className={classes.carouselContent}>
										<Typography variant='h5'>{step.title}</Typography>
										<Typography variant='body1'>{step.body}</Typography>
										<Box className={classes.readMore}>
											<Link href='/' title='read more' />
										</Box>
									</Box>
								</Box>
							) : null}
						</Box>
					))}
				</AutoPlaySwipeableViews>
				<Box zIndex='1200px'>
					<Button
						disabled={activeStep === 0}
						onClick={handleBack}
						className={`${classes.btn} ${classes.leftBtn}`}
					>
						<ChevronLeftIcon />
					</Button>
					<Button
						disabled={activeStep === maxSteps - 1}
						onClick={handleNext}
						className={`${classes.btn} ${classes.rightBtn}`}
					>
						<ChevronRightIcon />
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default HomePageCarousel;
