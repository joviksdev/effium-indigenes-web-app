import React, { useState } from 'react';
import styles from './styles';
import galleries from '../../assets/images/gallery';
import Link from 'next/link';

//Material-ui/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Material-ui/icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const index = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const [displaySlide, setDIsplaySlide] = useState(false);
	const maxSteps = galleries.length;

	const handleDisplaySlide = (key) => {
		setActiveStep(key);
		setDIsplaySlide(true);
	};
	const closeDisplay = () => setDIsplaySlide(false);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	return (
		<Box className={classes.wrapper}>
			<Typography
				className={classes.textHeader}
				variant='h5'
				color='textSecondary'
			>
				Gallery
			</Typography>
			<Box display='grid' gridTemplateColumns='repeat(4, 1fr)'>
				{galleries.map((gallery, key) => (
					<Box
						position='relative'
						display='flex'
						justifyContent='center'
						alignItems='center'
						className={classes.imgWrapper}
						key={key}
					>
						<Button
							onClick={() => handleDisplaySlide(key)}
							className={classes.viewBtn}
						>
							<ImageSearchIcon />
						</Button>
						<img style={{ width: '100%' }} src={gallery.src} />
					</Box>
				))}
			</Box>
			{displaySlide && (
				<Box
					display='flex'
					justifyContent='center'
					position='fixed'
					alignItems='center'
					className={classes.displayWrapper}
				>
					<Box className={classes.closeBtn}>
						<Button onClick={closeDisplay}>
							<CloseIcon />
						</Button>
					</Box>
					<Box
						position='relative'
						zIndex='10000px'
						margin='auto'
						className={classes.lightboxImg}
					>
						<img
							style={{
								width: '100%',
								zIndex: '1200px',
								borderRadius: '5px',
								userSelect: 'none',
							}}
							src={galleries[activeStep].src}
							alt={`gallery-${activeStep}`}
						/>
					</Box>
					<Box zIndex='1200px'>
						<Button
							disabled={activeStep === maxSteps - 1}
							onClick={handleNext}
							className={`${classes.btn} ${classes.rightBtn}`}
						>
							<ChevronRightIcon />
						</Button>
						<Button
							disabled={activeStep === 0}
							onClick={handleBack}
							className={`${classes.btn} ${classes.leftBtn}`}
						>
							<ChevronLeftIcon />
						</Button>
					</Box>
				</Box>
			)}
			<Box
				className={classes.container}
				display='flex'
				justifyContent='flex-end'
				marginTop='5px'
			>
				<Link href='/'>
					<a className={classes.link}>
						view more <ArrowRightAltIcon />
					</a>
				</Link>
			</Box>
		</Box>
	);
};

export default index;
