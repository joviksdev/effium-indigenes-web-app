import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './styles';

// Material-ui/Core
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Material-ui/Icon
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import carousel from '../../assets/images/home-carousel';

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
		<Box position='relative'>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				interval={5000}
			>
				{carousel.map((step, index) => (
					<Box key={index}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								height='60vh'
								width='100%'
								style={{
									background: `url('${step.src}') no-repeat center`,
									backgroundColor: 'black',
									backgroundSize: 'cover',
									backgroundPosition: 'cover ',
								}}
							></Box>
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
	);
};

export default HomePageCarousel;
