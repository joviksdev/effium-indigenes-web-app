import React from 'react';
import Link from 'next/link';
import styles from './styles';
import img from '../../assets/images/contactbg.png';
import { grayColor, blackColor } from '../../assets/js/componentsStyles';

// MAterial-ui/core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

// Material-ui/Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const ContactHeader = () => {
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
				<Box height='100%' className={classes.contactHeader}>
					<Box>
						<Box maxWidth='560px'>
							<Typography className={classes.headerText}>Contact</Typography>

							<Breadcrumbs className={classes.breadCrumbs}>
								<Link href='/'>
									<a className={classes.link}>Home</a>
								</Link>
								<Link href='/contact'>
									<a className={`${classes.link} ${classes.active}`}>contact</a>
								</Link>
							</Breadcrumbs>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ContactHeader;
